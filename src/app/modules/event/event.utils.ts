import { personalKeywords, workKeywords } from "./event.constant";
import { Category } from "./event.interface";

export const categorizeEvent = (text: string): Category => {
  const lowerText = text.toLowerCase();
  if (workKeywords.some((keyword) => lowerText.includes(keyword)))
    return "Work";
  if (personalKeywords.some((keyword) => lowerText.includes(keyword)))
    return "Personal";
  return "Other";
};
