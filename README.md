# HOOD AI Chat

🌐 **Live Demo**: [https://hoodsai.netlify.app](https://hoodsai.netlify.app)

A sophisticated AI chatbot application built with React, TypeScript, and Tailwind CSS that provides ChatGPT-like conversational AI capabilities with comprehensive knowledge across multiple domains.

## 🚀 Features

### 🧠 Advanced AI Capabilities
- **Comprehensive Knowledge Base**: Detailed information on science, mathematics, technology, current events, and more
- **Natural Language Processing**: Understands context and provides relevant, detailed responses
- **Conversation Memory**: Maintains context throughout conversations for coherent dialogue
- **Multi-Domain Expertise**: Physics, chemistry, biology, mathematics, computer science, current affairs

### 💬 Interactive Chat Interface
- **Real-time Messaging**: Smooth, responsive chat experience
- **Voice Input/Output**: Speech recognition and text-to-speech capabilities
- **Typing Indicators**: Visual feedback during AI response generation
- **Message History**: Persistent chat history with local storage

### 🎨 Modern UI/UX
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Beautiful Animations**: Smooth micro-interactions and transitions
- **Accessibility**: Keyboard navigation and screen reader support

### ⚙️ Customization
- **User Preferences**: Personalized settings for communication style
- **Voice Controls**: Enable/disable voice features
- **Learning Engine**: Adapts to user preferences and conversation patterns
- **Export/Import**: Save and restore chat history and preferences

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Storage**: LocalStorage for persistence
- **APIs**: Multiple AI service integrations with fallback systems

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hood-ai-chat
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🚀 Usage

### Basic Chat
1. Type your question or message in the input field
2. Press Enter or click the send button
3. HOOD will provide detailed, informative responses

### Voice Features
1. Click the microphone button to start voice input
2. Speak your question clearly
3. HOOD will respond with both text and optional voice output

### Settings
1. Click the settings icon in the header
2. Customize your name, communication style, and preferences
3. Enable/disable voice features
4. Clear conversation history if needed

## 🧠 Knowledge Domains

HOOD provides expert-level information on:

### 🔬 Science & Physics
- Quantum mechanics and particle physics
- Theory of relativity (special and general)
- Black holes and cosmology
- Thermodynamics and energy
- Electromagnetic theory

### 🧬 Biology & Life Sciences
- Genetics and DNA structure
- Evolution and natural selection
- Photosynthesis and cellular processes
- Ecology and environmental science
- Human anatomy and physiology

### 📊 Mathematics
- Calculus (differential and integral)
- Linear algebra and statistics
- Geometry and trigonometry
- Number theory and discrete math
- Applied mathematics

### 💻 Technology & Computer Science
- Artificial intelligence and machine learning
- Programming languages and algorithms
- Computer architecture and networks
- Software engineering principles
- Cybersecurity and data science

### 🌍 Current Affairs & Geography
- World leaders and political systems
- Countries, capitals, and demographics
- Economic systems and global trade
- Climate change and environmental issues
- Historical events and cultural topics

## 🎯 Example Interactions

**Science Question:**
```
User: "What is quantum mechanics?"
HOOD: "Quantum mechanics is the fundamental theory in physics that describes the behavior of matter and energy at the atomic and subatomic scale. Here are the key principles:

**Core Principles:**
• Wave-Particle Duality: Particles like electrons exhibit both wave and particle properties
• Uncertainty Principle: You cannot simultaneously know exact position and momentum
• Superposition: Particles can exist in multiple states simultaneously
• Quantum Entanglement: Particles can be correlated across vast distances

**Applications:**
• Lasers and LED technology
• MRI machines in healthcare
• Computer processors and quantum computing
• GPS satellite corrections..."
```

**Current Events:**
```
User: "Who is the president of Kenya?"
HOOD: "The current President of Kenya is William Ruto, who took office on September 13, 2022. He won the 2022 presidential election with 50.49% of the vote and previously served as Deputy President under Uhuru Kenyatta from 2013-2022..."
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file for API configurations (optional):
```env
VITE_OPENAI_API_KEY=your_api_key_here
VITE_GROQ_API_KEY=your_groq_key_here
```

### Customization
- Modify `src/utils/AIService.ts` to add new knowledge domains
- Update `src/types/chat.ts` for new message types
- Customize themes in `tailwind.config.js`

## 📱 Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Voice Features Require:**
- Modern browsers with Web Speech API support
- Microphone permissions
- HTTPS connection (for production)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with React and modern web technologies
- Icons provided by Lucide React
- Inspired by ChatGPT and modern AI assistants
- Thanks to the open-source community for tools and libraries

## 🐛 Known Issues

- Voice recognition may vary by browser and language settings
- Some advanced scientific calculations require manual verification
- API rate limits may apply for external service integrations

## 🔮 Future Enhancements

- [ ] Multi-language support
- [ ] File upload and analysis
- [ ] Mathematical equation rendering
- [ ] Plugin system for extensions
- [ ] Mobile app versions
- [ ] Advanced voice synthesis options

---

**HOOD AI Chat** - Your intelligent conversation partner for learning, problem-solving, and exploration across all domains of knowledge.


