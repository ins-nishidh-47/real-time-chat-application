import React from 'react';
import { User } from 'lucide-react';

interface ChatMessageProps {
  username: string;
  message: string;
  timestamp: string;
  isSystem?: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ username, message, timestamp, isSystem }) => {
  return (
    <div className={`flex items-start space-x-3 p-2 ${isSystem ? 'text-gray-500 italic' : ''}`}>
      {!isSystem && (
        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
          <User className="w-5 h-5 text-indigo-600" />
        </div>
      )}
      <div className="flex-1">
        {!isSystem && (
          <p className="font-semibold text-sm text-gray-800">{username}</p>
        )}
        <p className="text-gray-700">{message}</p>
        <p className="text-xs text-gray-400">
          {new Date(timestamp).toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};