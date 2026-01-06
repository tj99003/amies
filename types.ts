
import React from 'react';

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  iconId: string;
  image: string;
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
