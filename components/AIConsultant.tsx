
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader2, User, Bot } from 'lucide-react';
import { getBeautyAdvice } from '../services/gemini';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
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
  }, [messages]);

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
    <section id="ai" className="py-20 bg-lavender-soft overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4">
            <Sparkles className="text-amiés-purple w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Consultora de Belleza AI</h2>
          <p className="text-gray-600 italic">Conversa con nuestra inteligencia experta para recibir recomendaciones personalizadas.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-[500px] border border-purple-100">
          <div className="bg-amiés-purple p-4 text-white flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold">Chat con Ami</h3>
              <p className="text-xs text-purple-100">Experta en Belleza y Estilo</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-4 flex gap-3 ${
                  msg.role === 'user' 
                    ? 'bg-amiés-purple text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                }`}>
                  <div className="mt-1">
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4 text-amiés-purple" />}
                  </div>
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 rounded-tl-none flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 text-amiés-purple animate-spin" />
                  <span className="text-sm text-gray-500 italic">Ami está pensando...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pregunta sobre un nuevo corte de cabello..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-amiés-purple text-white p-2 rounded-full hover:bg-purple-700 transition-colors disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
