import React from 'react';

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: React.ReactNode;
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