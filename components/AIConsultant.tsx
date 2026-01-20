
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader2, User, Bot, X } from 'lucide-react';
import { getBeautyAdvice } from '../services/gemini';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: '¡Hola! Soy Ami, tu consultora de belleza personal. ¿En qué puedo ayudarte hoy? Puedo sugerirte estilos, colores o rutinas de cuidado.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getBeautyAdvice(userMsg);
    
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <>
      <div id="ai" />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-32 right-8 z-50 bg-amiés-purple text-white p-5 rounded-full shadow-2xl hover:bg-purple-700 transition-all transform hover:scale-110 flex items-center justify-center group"
        aria-label="Abrir chat con Ami"
      >
        {isOpen ? <X className="w-8 h-8" /> : <Sparkles className="w-8 h-8" />}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-black whitespace-nowrap uppercase tracking-widest text-xs">
          Chat con Ami
        </span>
      </button>

      {isOpen && (
        <div className="fixed bottom-52 right-8 z-50 w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-purple-100">
          <div className="bg-amiés-purple p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Ami - Consultora</h3>
                <p className="text-xs text-purple-100 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span>
                  En línea
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 flex gap-2 ${
                  msg.role === 'user' 
                    ? 'bg-amiés-purple text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                }`}>
                  <div className="mt-0.5 shrink-0">
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4 text-amiés-purple" />}
                  </div>
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 rounded-tl-none flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 text-amiés-purple animate-spin" />
                  <span className="text-xs text-gray-500 italic">Escribiendo...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex space-x-2 items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe tu consulta..."
                className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-sm transition-all"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-amiés-purple text-white p-2.5 rounded-full hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIConsultant;
