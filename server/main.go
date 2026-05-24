package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
)

type User struct {
	ID        int    `json:"id"`
	Phone     string `json:"phone"`
	Name      string `json:"name"`
	State     string `json:"state"`
	LGA       string `json:"lga"`
	Verified  bool   `json:"verified"`
	CreatedAt string `json:"created_at"`
}

type Post struct {
	ID        int    `json:"id"`
	UserID    int    `json:"user_id"`
	Content   string `json:"content"`
	Language  string `json:"language"`
	CreatedAt string `json:"created_at"`
}

var db *sql.DB

func main() {
	initDB()
	defer db.Close()

	r := mux.NewRouter()

	r.HandleFunc("/api/health", healthHandler).Methods("GET")
	r.HandleFunc("/api/users", getUsersHandler).Methods("GET")
	r.HandleFunc("/api/posts", getPostsHandler).Methods("GET")

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server starting on port %s", port)
	log.Fatal(http.ListenAndServe(":"+port, r))
}

func initDB() {
	connStr := os.Getenv("DATABASE_URL")
	if connStr == "" {
		connStr = "postgres://postgres:password@localhost:5432/9jaconnect?sslmode=disable"
	}

	var err error
	db, err = sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}

	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}

	log.Println("Database connected")
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}

func getUsersHandler(w http.ResponseWriter, r *http.Request) {
	rows, err := db.Query("SELECT id, phone, name, state, lga, verified, created_at FROM users LIMIT 100")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	users := []User{}
	for rows.Next() {
		var u User
		err := rows.Scan(&u.ID, &u.Phone, &u.Name, &u.State, &u.LGA, &u.Verified, &u.CreatedAt)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		users = append(users, u)
	}

	json.NewEncoder(w).Encode(users)
}

func getPostsHandler(w http.ResponseWriter, r *http.Request) {
	rows, err := db.Query("SELECT id, user_id, content, language, created_at FROM posts ORDER BY created_at DESC LIMIT 50")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	posts := []Post{}
	for rows.Next() {
		var p Post
		err := rows.Scan(&p.ID, &p.UserID, &p.Content, &p.Language, &p.CreatedAt)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		posts = append(posts, p)
	}

	json.NewEncoder(w).Encode(posts)
}

func init() {
	fmt.Println("9jaConnect API Server")
}