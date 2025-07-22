import React from 'react';
import { Bot, User, Volume2 } from 'lucide-react';
import { ChatMessage as ChatMessageType, UserPreferences } from '../types/chat';

interface ChatMessageProps {
  message: ChatMessageType;
  darkMode: boolean;
  isFirst: boolean;
  userPreferences: UserPreferences;
}

export function ChatMessage({ message, darkMode, isFirst, userPreferences }: ChatMessageProps) {
  const isUser = message.sender === 'user';
  const isVoice = message.type === 'voice';

  const speakMessage = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(message.text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className={`flex items-start space-x-3 animate-slide-in ${
      isUser ? 'flex-row-reverse space-x-reverse' : ''
    }`}>
      {/* Avatar */}
      {isFirst && (
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
          isUser
            ? darkMode
              ? 'bg-purple-600'
              : 'bg-blue-600'
            : darkMode
              ? 'bg-gray-700'
              : 'bg-gray-300'
        }`}>
          {isUser ? (
            <User className="w-6 h-6 text-white" />
          ) : (
            <Bot className={`w-6 h-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
          )}
        </div>
      )}

      {/* Message Bubble */}
      <div className={`flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl ${
        isFirst ? '' : isUser ? 'mr-13' : 'ml-13'
      }`}>
        <div className={`relative group ${isUser ? 'flex justify-end' : ''}`}>
          <div className={`relative px-4 py-3 rounded-2xl ${
            isUser
              ? darkMode
                ? 'bg-purple-600 text-white'
                : 'bg-blue-600 text-white'
              : darkMode
                ? 'bg-gray-800/80 text-gray-100 border border-gray-700'
                : 'bg-white/90 text-gray-900 border border-gray-200'
          } shadow-lg backdrop-blur-sm transition-all duration-200 hover:shadow-xl ${
            isUser ? 'rounded-tr-md' : 'rounded-tl-md'
          }`}>
            {/* Voice indicator */}
            {isVoice && (
              <div className={`inline-flex items-center space-x-1 text-xs mb-1 ${
                isUser ? 'text-purple-200' : darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                <Volume2 className="w-3 h-3" />
                <span>Voice message</span>
              </div>
            )}
            
            <p className="text-sm leading-relaxed break-words">{message.text}</p>
            
            {/* Timestamp */}
            <div className={`text-xs mt-2 ${
              isUser 
                ? 'text-purple-200' 
                : darkMode 
                  ? 'text-gray-500' 
                  : 'text-gray-400'
            }`}>
              {message.timestamp.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </div>
          </div>

          {/* Speak button for bot messages */}
          {!isUser && userPreferences.voiceEnabled && (
            <button
              onClick={speakMessage}
              className={`absolute -right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 rounded-full ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              <Volume2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
