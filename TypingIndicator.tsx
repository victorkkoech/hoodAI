import React from 'react';
import { Bot } from 'lucide-react';

interface TypingIndicatorProps {
  darkMode: boolean;
}

export function TypingIndicator({ darkMode }: TypingIndicatorProps) {
  return (
    <div className="flex items-start space-x-3 animate-slide-in">
      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
        darkMode ? 'bg-gray-700' : 'bg-gray-300'
      }`}>
        <Bot className={`w-6 h-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
      </div>
      
      <div className={`px-4 py-3 rounded-2xl rounded-tl-md ${
        darkMode
          ? 'bg-gray-800/80 border border-gray-700'
          : 'bg-white/90 border border-gray-200'
      } shadow-lg backdrop-blur-sm`}>
        <div className="flex space-x-1">
          <div className={`w-2 h-2 rounded-full animate-bounce ${
            darkMode ? 'bg-gray-400' : 'bg-gray-500'
          }`} style={{ animationDelay: '0ms' }}></div>
          <div className={`w-2 h-2 rounded-full animate-bounce ${
            darkMode ? 'bg-gray-400' : 'bg-gray-500'
          }`} style={{ animationDelay: '150ms' }}></div>
          <div className={`w-2 h-2 rounded-full animate-bounce ${
            darkMode ? 'bg-gray-400' : 'bg-gray-500'
          }`} style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
