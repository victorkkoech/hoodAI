import React, { useState } from 'react';
import { X, User, Brain, Mic, MicOff } from 'lucide-react';
import { UserPreferences } from '../types/chat';
import { AIService } from '../utils/AIService';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  userPreferences: UserPreferences;
  updatePreferences: (preferences: Partial<UserPreferences>) => void;
}

export function SettingsModal({ 
  isOpen, 
  onClose, 
  darkMode, 
  userPreferences, 
  updatePreferences 
}: SettingsModalProps) {
  const [localPreferences, setLocalPreferences] = useState(userPreferences);
  const aiService = new AIService();

  if (!isOpen) return null;

  const handleSave = () => {
    updatePreferences(localPreferences);
    onClose();
  };

  const handlePreferenceChange = (key: keyof UserPreferences, value: any) => {
    setLocalPreferences(prev => ({ ...prev, [key]: value }));
  };

  const handleClearHistory = () => {
    aiService.clearConversationHistory();
    // You might want to add a toast notification here
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`relative w-full max-w-md rounded-2xl shadow-2xl ${
        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className={`text-xl font-semibold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Settings
          </h2>
          <button
            onClick={onClose}
            className={`p-1 rounded-lg transition-colors ${
              darkMode 
                ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* User Profile */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <User className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-blue-600'}`} />
              <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Profile
              </h3>
            </div>
            <input
              type="text"
              value={localPreferences.name}
              onChange={(e) => handlePreferenceChange('name', e.target.value)}
              placeholder="Your name"
              className={`w-full px-3 py-2 rounded-lg border ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
              } focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
          </div>

          {/* Communication Style */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Brain className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-blue-600'}`} />
              <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Communication Style
              </h3>
            </div>
            <select
              value={localPreferences.communicationStyle}
              onChange={(e) => handlePreferenceChange('communicationStyle', e.target.value)}
              className={`w-full px-3 py-2 rounded-lg border ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-gray-50 border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-purple-500`}
            >
              <option value="casual">Casual</option>
              <option value="formal">Formal</option>
              <option value="friendly">Friendly</option>
            </select>
          </div>

          {/* Voice Settings */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {localPreferences.voiceEnabled ? (
                  <Mic className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-blue-600'}`} />
                ) : (
                  <MicOff className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                )}
                <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Voice Features
                </h3>
              </div>
              <button
                onClick={() => handlePreferenceChange('voiceEnabled', !localPreferences.voiceEnabled)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  localPreferences.voiceEnabled
                    ? darkMode ? 'bg-purple-600' : 'bg-blue-600'
                    : darkMode ? 'bg-gray-600' : 'bg-gray-300'
                }`}
              >
                <div className={`absolute w-5 h-5 bg-white rounded-full transition-transform top-0.5 ${
                  localPreferences.voiceEnabled ? 'translate-x-6' : 'translate-x-0.5'
                }`} />
              </button>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Enable voice input and text-to-speech responses
            </p>
          </div>

          {/* AI Settings */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Brain className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-blue-600'}`} />
              <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                AI Memory
              </h3>
            </div>
            <button
              onClick={handleClearHistory}
              className={`w-full px-3 py-2 rounded-lg border transition-colors ${
                darkMode
                  ? 'border-red-600 text-red-400 hover:bg-red-900/20'
                  : 'border-red-300 text-red-600 hover:bg-red-50'
              }`}
            >
              Clear Conversation History
            </button>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              This will clear HOOD's memory of your conversation context
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex space-x-3 p-6 border-t border-gray-700">
          <button
            onClick={onClose}
            className={`flex-1 px-4 py-2 rounded-lg border transition-colors ${
              darkMode
                ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className={`flex-1 px-4 py-2 rounded-lg text-white transition-colors ${
              darkMode 
                ? 'bg-purple-600 hover:bg-purple-500' 
                : 'bg-blue-600 hover:bg-blue-500'
            }`}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
