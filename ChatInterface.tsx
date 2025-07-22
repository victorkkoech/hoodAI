import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff } from 'lucide-react';
import { ChatMessage as ChatMessageType, UserPreferences } from '../types/chat';
import { ChatMessage } from './ChatMessage';
import { TypingIndicator } from './TypingIndicator';

interface ChatInterfaceProps {
  messages: ChatMessageType[];
  isTyping: boolean;
  onSendMessage: (message: string, type?: 'text' | 'voice') => void;
  onVoiceInput: () => void;
  darkMode: boolean;
  userPreferences: UserPreferences;
}

export function ChatInterface({ 
  messages, 
  isTyping, 
  onSendMessage, 
  onVoiceInput, 
  darkMode,
  userPreferences 
}: ChatInterfaceProps) {
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      onSendMessage(inputText.trim());
      setInputText('');
    }
  };

  const handleVoiceClick = () => {
    setIsListening(true);
    onVoiceInput();
    setTimeout(() => setIsListening(false), 3000); // Reset after 3 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Chat Messages Area */}
      <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${
        darkMode ? 'bg-gray-900/20' : 'bg-white/20'
      } backdrop-blur-sm`}>
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((message, index) => (
            <ChatMessage
              key={message.id}
              message={message}
