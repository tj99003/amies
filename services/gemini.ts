
import { GoogleGenAI } from "@google/genai";
import { CONTACT_INFO } from "../constants";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getBeautyAdvice(prompt: string): Promise<string> {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: `Eres Ami, la consultora de belleza experta del salón "Amiés - Beauté et Style". 
        Tu tono es elegante, amable, servicial y profesional. 
        Ofreces consejos sobre cortes de cabello, colorimetría, cuidado de la piel y uñas.
        Responde siempre en español. Mantén tus respuestas concisas pero inspiradoras.
        Si el usuario parece interesado en agendar o visitar el salón, sugiérele amablemente que puede contactarnos directamente por WhatsApp al ${CONTACT_INFO.phone} para una atención más personalizada.`,
      },
    });
    return response.text || "Lo siento, tuve un pequeño problema para pensar. ¿Podrías preguntarme de nuevo?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Ups, parece que mis brochas se enredaron. Por favor, intenta de nuevo más tarde.";
  }
}
