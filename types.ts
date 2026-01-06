
import React from 'react';

export interface Service {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: string;
  iconId: string;
  image: string;
  duration?: string;
  includes?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
