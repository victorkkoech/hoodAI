import React, { useState } from 'react';
import { Moon, Sun, Settings, Brain, MessageCircle } from 'lucide-react';
import { UserPreferences } from '../types/chat';
import { SettingsModal } from './SettingsModal';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  userPreferences: UserPreferences;
  updatePreferences: (preferences: Partial<UserPreferences>) => void;
}

export function Header({ darkMode, setDarkMode, userPreferences, updatePreferences }: HeaderProps) {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <header className={`p-4 border-b backdrop-blur-sm ${
        darkMode 
          ? 'bg-gray-900/30 border-gray-700' 
          : 'bg-white/30 border-gray-200'
      }`}>
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${
              darkMode ? 'bg-purple-600' : 'bg-blue-600'
            }`}>
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                HOOD AI Chat
              </h1>
              <p className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Powered by advanced language models
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowSettings(true)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              <Settings className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs ${
              darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'
            }`}>
              <MessageCircle className="w-3 h-3" />
              <span>Active</span>
            </div>
          </div>
        </div>
      </header>

      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        darkMode={darkMode}
        userPreferences={userPreferences}
        updatePreferences={updatePreferences}
      />
    </>
  );
}
