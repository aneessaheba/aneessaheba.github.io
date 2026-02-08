import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Anees's AI assistant. Ask me anything about her background, projects, skills, or experience!",
      source: null
    }
  ]);
  const [input, setInput] = useState('');
  const [knowledgeBase, setKnowledgeBase] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetch('/knowledgeBase.json')
      .then(res => res.json())
      .then(data => setKnowledgeBase(data))
      .catch(err => console.error('Failed to load knowledge base:', err));
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const suggestedQuestions = [
    "What is Anees currently working on?",
    "Tell me about her HP experience",
    "Which projects use LangChain?",
    "What is her education and GPA?",
    "What are her main skills?"
  ];

  const findAnswer = (query) => {
    if (!knowledgeBase) {
      return { answer: "I'm still loading my knowledge base. Please try again in a moment.", source: null };
    }

    const lowerQuery = query.toLowerCase();

    // Check FAQ first
    const faqMatch = knowledgeBase.faq.find(item => 
      lowerQuery.includes(item.question.toLowerCase().split(' ').slice(0, 3).join(' '))
    );
    if (faqMatch) return { answer: faqMatch.answer, source: faqMatch.source };

    // Personal info queries
    if (lowerQuery.includes('email') || lowerQuery.includes('contact')) {
      return { answer: `You can reach Anees at ${knowledgeBase.personalInfo.email}`, source: "Contact" };
    }

    if (lowerQuery.includes('github')) {
      return { answer: `Anees's GitHub: ${knowledgeBase.personalInfo.github}`, source: "Contact" };
    }

    if (lowerQuery.includes('linkedin')) {
      return { answer: `Anees's LinkedIn: ${knowledgeBase.personalInfo.linkedin}`, source: "Contact" };
    }

    if (lowerQuery.includes('location') || lowerQuery.includes('where')) {
      return { answer: `Anees is based in ${knowledgeBase.personalInfo.location}`, source: "About" };
    }

    // Education queries
    if (lowerQuery.includes('education') || lowerQuery.includes('degree') || lowerQuery.includes('gpa')) {
      const edu = knowledgeBase.education;
      return { 
        answer: `Anees is currently pursuing ${edu[0].degree} at ${edu[0].institution} (${edu[0].period}) with a GPA of ${edu[0].gpa}. She completed her ${edu[1].degree} from ${edu[1].institution} with a GPA of ${edu[1].gpa}.`,
        source: "Education"
      };
    }

    // Experience queries
    if (lowerQuery.includes('hp') || lowerQuery.includes('hewlett') || lowerQuery.includes('work experience')) {
      const hp = knowledgeBase.experience[0];
      return { 
        answer: `At HP (${hp.period}), Anees worked as a ${hp.role}. Key responsibilities: ${hp.responsibilities.slice(0, 3).join('; ')}.`,
        source: "Experience"
      };
    }

    // Project queries
    if (lowerQuery.includes('langchain')) {
      const projects = knowledgeBase.featuredProjects.filter(p => 
        p.tech.some(t => t.toLowerCase().includes('langchain'))
      );
      return { 
        answer: `Anees has ${projects.length} projects using LangChain: ${projects.map(p => p.name).join(', ')}.`,
        source: "Projects"
      };
    }

    if (lowerQuery.includes('projects')) {
      return { 
        answer: `Anees has ${knowledgeBase.featuredProjects.length} featured projects including: ${knowledgeBase.featuredProjects.map(p => p.name).join(', ')}.`,
        source: "Projects"
      };
    }

    // Skills queries
    if (lowerQuery.includes('skills') || lowerQuery.includes('technologies')) {
      return { 
        answer: `Anees has expertise in 70+ technologies across GenAI/LLMs, ML/DL, Programming, Data Engineering, and Cloud Systems. Top skills include: ${knowledgeBase.skills.GenAI_LLMs.slice(0, 5).join(', ')}.`,
        source: "Skills"
      };
    }

    // Currently working on
    if (lowerQuery.includes('currently') || lowerQuery.includes('working on')) {
      return { 
        answer: `Currently, Anees is: ${knowledgeBase.currentlyWorkingOn.join('; ')}.`,
        source: "About"
      };
    }

    // About
    if (lowerQuery.includes('about') || lowerQuery.includes('who')) {
      return { 
        answer: knowledgeBase.about.summary,
        source: "About"
      };
    }

    return { 
      answer: "I don't have that information on the site. Try asking about Anees's education, experience, projects, or skills!",
      source: null
    };
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input, source: null };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const { answer, source } = findAnswer(input);
      const assistantMessage = { role: 'assistant', content: answer, source };
      setMessages(prev => [...prev, assistantMessage]);
    }, 500);

    setInput('');
  };

  const handleSuggestedQuestion = (question) => {
    setInput(question);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-24 right-6 z-50 p-4 rounded-full glass glow cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -100 }}
            className="fixed top-40 right-6 z-40 w-96 h-[500px] glass rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="bg-gradient-to-r from-primary to-secondary p-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-white" />
                <h3 className="font-display font-bold text-white">Ask About Anees</h3>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-primary to-secondary text-white'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                  {msg.source && (
                    <span className="text-xs text-gray-400 mt-1">Source: {msg.source}</span>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-400 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.slice(0, 3).map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestedQuestion(q)}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 rounded-full bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  onClick={handleSend}
                  className="p-2 rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-80 transition-opacity"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;