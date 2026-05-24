# 9jaConnect

**Connecting Nigeria, One Community at a Time**

9jaConnect is a comprehensive social platform designed specifically for Nigerians to connect, communicate, and collaborate across social media, news, economy, entertainment, politics, and beyond. Our mission is to solve real problems faced by Nigerians in connecting with each other and accessing reliable information.

## 🌟 Overview

9jaConnect addresses the fragmentation of Nigerian digital spaces by providing a unified platform where real people can connect authentically. We focus on solving Nigeria's unique connectivity challenges: unreliable networks, diverse languages, cultural diversity, and the need for trusted local information.

## ✨ Core Features

### 🤝 Social Connection & Community
- **Hyperlocal Networking**: Connect with people in your state, LGA, or even your street
- **Verified Identity**: Phone number verification + BVN integration for real people only
- **Cultural Groups**: Yoruba, Igbo, Hausa, and other ethnic groups with native language support
- **Professional Networks**: Industry-specific groups (banking, oil & gas, tech, entertainment)
- **Village/Ancestry Groups**: Reconnect with your hometown and extended family

### 📰 Local News & Information Hub
- **Verified Local Sources**: News from trusted Nigerian journalists and citizen reporters
- **Fact-Checked Information**: Combat misinformation with community verification
- **Multi-Language Support**: English, Yoruba, Igbo, Hausa, and Pidgin English
- **Real-Time Alerts**: Security, weather, and emergency notifications by region
- **Community Reporting**: Report local issues directly to authorities and media

### 💰 Economic Empowerment
- **Local Marketplace**: Buy, sell, and trade within your community
- **Skill Showcase**: Artisans, professionals, and service providers get discovered
- **Micro-Business Support**: Tools for small businesses to reach local customers
- **Job Board**: Nigeria-focused job listings with direct employer connections
- **Financial Literacy**: Local currency tips, investment advice, and scam warnings
- **Cooperative Groups**: Ajo, Esusu, and savings circle management tools

### 🎭 Entertainment & Culture
- **Nollywood Hub**: Stream, discuss, and discover Nigerian movies and shows
- **Music Discovery**: Afrobeats, Highlife, Juju, Fuji, and indigenous genres
- **Event Finder**: Concerts, festivals, and local gatherings near you
- **Comedy Central**: Nigerian comedians and skit makers platform
- **Cultural Heritage**: Preserve and share traditional stories, festivals, and practices

### 🗳️ Politics & Civic Engagement
- **Voter Education**: Clear, factual information about elections and candidates
- **Policy Discussion**: Structured debates on national issues
- **Hold Leaders Accountable**: Rate government performance by constituency
- **Petition Platform**: Start and sign petitions for community issues
- **Civic Participation**: RSVP to town halls, rallies, and community meetings

### 💬 Communication & Messaging
- **Offline-First Design**: Works on 2G/3G networks, messages queue for delivery
- **Group Chats**: Family groups, work teams, community associations
- **Voice Notes**: Low-data voice messaging in local languages
- **Broadcast Lists**: Community announcements without traditional SMS costs
- **Emergency Communication**: Panic button and location sharing for safety

### 🎯 Edge Cases We Solve

#### Network Resilience
- **Offline Mode**: Compose posts/comments offline, auto-sync when connected
- **Data Compression**: 10x less data usage than typical social platforms
- **SMS Fallback**: Critical notifications via SMS when data fails
- **Progressive Loading**: Content loads progressively, no spinner of death

#### Digital Literacy
- **Simple Onboarding**: Works for users with basic phone literacy
- **Voice Commands**: Navigate platform hands-free in local languages
- **Illustrated Guides**: Visual tutorials for common actions
- **Community Helpers**: Experienced users can volunteer to assist newcomers

#### Trust & Safety
- **Scammer Detection**: AI + community flagging for fraudulent users
- **Fake News Filter**: Source verification for circulating information
- **Privacy Zones**: Control who sees your posts (family only, state only, etc.)
- **Report to Authorities**: Direct channel to report cybercrime and fraud

#### Financial Inclusion
- **Airtime Payments**: Buy platform features with airtime (no card needed)
- **USSD Integration**: Access core features via USSD for feature phone users
- **Cash on Delivery**: Marketplace transactions with cash payment option
- **Group Savings**: Digital pooling for community projects and emergencies

#### Cultural Sensitivity
- **Religious Neutrality**: Equal representation of all faiths
- **Ethnic Inclusion**: No dominant group bias in algorithms
- **Local Holiday Recognition**: Platform respects all Nigerian holidays
- **Custom Greetings**: Automatically switches language by user preference

#### Real Person Verification
- **Phone Verification**: Every account must verify with active Nigerian number
- **BVN Linking**: Optional BVN verification for enhanced trust
- **Photo ID Check**: Manual review for suspicious accounts
- **Community Vouching**: Trusted members can verify new users

## 📊 Platform Statistics

| Metric | Value |
|--------|-------|
| Connected Communities | 774 LGAs |
| Supported Languages | 5+ |
| Network Resilience | 2G/3G/4G/5G |
| Offline Capability | Yes |
| Real Users Only | Phone Verified |
| Local Focus | Nigeria-First |

## 💻 Technical Architecture

### Backend
- **Language**: Go (Golang) for high performance, low resource usage
- **Database**: PostgreSQL with read replicas for regional data
- **Storage**: S3-compatible for media, compressed for slow networks
- **Caching**: Redis for offline message queuing
- **Messaging**: WebSocket with SSE fallback for unstable connections

### Frontend
- **Web**: React with Vite, Progressive Web App (PWA)
- **Mobile**: React Native (Android & iOS)
- **Offline**: Service workers for offline functionality
- **Languages**: i18n support for English, Yoruba, Igbo, Hausa, Pidgin

### Infrastructure
- **Cloud**: AWS/Azure with edge locations in Lagos, Abuja, Port Harcourt
- **CDN**: Regional content delivery for faster media loading
- **Monitoring**: Real-time uptime monitoring across all Nigerian networks

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+) and npm (for frontend)
- Go (v1.21+) (for backend)
- PostgreSQL (v14+)
- Modern web browser or smartphone

### Installation

```bash
# Clone the repository
git clone https://github.com/dinalegw/9jaConnect.git
cd 9jaConnect

# Install frontend dependencies
cd frontend
npm install

# Build the frontend for production
npm run build

# Run the Go backend
cd ..
go mod tidy
go run ./server
```

### Development

```bash
# Terminal 1 - Start the backend
cd 9jaConnect
go run ./server

# Terminal 2 - Start the frontend dev server
cd 9jaConnect/frontend
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:8080

## 🔌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check status |
| `/api/users` | GET | List of users (privacy-filtered) |
| `/api/posts` | GET | List of community posts |
| `/api/marketplace` | GET | Local marketplace items |
| `/api/news` | GET | Verified local news |
| `/api/events` | GET | Community events |
| `/api/groups` | GET | Available community groups |

## 🎯 Why 9jaConnect?

This platform solves critical Nigerian connectivity challenges:

- **No Foreign Algorithms**: Built by Nigerians, for Nigerian problems
- **Works Everywhere**: Even on the slowest networks
- **Real Connections**: Verified humans, not bots or fake accounts
- **Local Solutions**: Addresses problems unique to Nigeria
- **Economic Opportunity**: Tools for local commerce and jobs
- **Information Integrity**: Combats fake news and scams

## 🤝 Contributing

We welcome contributions from Nigerian developers, designers, and community leaders!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: support@9jaconnect.com
- **Twitter**: [@9jaConnect](https://twitter.com/9jaconnect)
- **Instagram**: [@9jaConnect](https://instagram.com/9jaconnect)
- **Community**: Join our Telegram group for updates

## 🔒 Security & Privacy

- End-to-end encryption for private messages
- GDPR-compliant data handling
- No sale of user data to third parties
- Optional anonymous posting for sensitive topics
- Data stored in Nigerian data centers when possible

---

## ❓ Frequently Asked Questions (FAQ)

### Getting Started

**Q: Who can join 9jaConnect?**
A: Anyone with a valid Nigerian phone number can join. We verify all accounts to ensure real people only.

**Q: What if I don't have a smartphone?**
A: Feature phone users can access basic features via USSD. Dial *919*123# to get started.

**Q: Does it work on slow internet?**
A: Yes! 9jaConnect is optimized for 2G networks. You can even compose posts offline.

### Privacy & Safety

**Q: How do you verify users are real?**
A: We require phone number verification for all accounts. BVN linking is optional for enhanced features.

**Q: What happens if someone posts fake news?**
A: Our community rating system and AI detection flag suspicious content. Repeated offenders are removed.

**Q: Can I post anonymously?**
A: Yes, on topics that require privacy (like reporting corruption or discussing sensitive issues).

### Groups & Communities

**Q: How do I find my local community?**
A: The app automatically suggests groups based on your location and interests.

**Q: Can I create my own group?**
A: Yes! Anyone can create a group for their community, association, or interest.

**Q: What languages are supported?**
A: English, Yoruba, Igbo, Hausa, and Nigerian Pidgin. We're adding more local languages.

### Marketplace & Economy

**Q: Is it safe to buy/sell locally?**
A: We use verified profiles and community ratings. Meet in public places for transactions.

**Q: Can I use airtime to pay?**
A: Yes! You can purchase premium features using MTN, Airtel, Glo, or 9mobile airtime.

**Q: What about cash payments?**
A: For local marketplace, cash on delivery is supported. We're adding bank transfers soon.

### Technical Support

**Q: My messages aren't sending. What do I do?**
A: Our system queues messages offline. They'll send automatically when you reconnect.

**Q: How much data does the app use?**
A: Less than 5MB per hour of typical use. We compress all images and media.

**Q: What if I change my phone number?**
A: You can update your number in settings. Your account and connections remain intact.

---

© 2026 9jaConnect. All rights reserved. | Connecting Nigeria | Built by Nigerians