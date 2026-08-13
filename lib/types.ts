export type AIModeType = 'general' | 'coding' | 'writing' | 'research' | 'creative';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface Conversation {
  id: string;
  title: string;
  mode: AIModeType;
  messages: Message[];
  createdAt: string;
  isFav?: boolean;
}

export interface PromptSuggestion {
  category: 'Write' | 'Learn' | 'Code' | 'Analyze' | 'Brainstorm' | 'Create';
  title: string;
  prompt: string;
  iconName: string;
}

export interface FileAttachment {
  name: string;
  size: string;
  type: string;
}