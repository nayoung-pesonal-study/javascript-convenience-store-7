import fs from 'fs/promises';
import { Parser } from './Parser.js';

const loadFile = async (filePath) => {
  const file = await fs.readFile(filePath, 'utf-8');
  return Parser.splitLine(file);
};

const loadPromotion = async () => {
  const promotionLines = await loadFile('public/promotions.md');
  const promotions = promotionLines.map((line) => {
    const contentArray = Parser.splitStringToArray(line, ',');
    const [name, buy, get, start_date, end_date] = contentArray;
    return generatePromotionModel(name, buy, get, start_date, end_date);
  });

  return promotions;
};

const generatePromotionModel = (name, buy, get, start_date, end_date) => ({
  name: name,
  buy: parseInt(buy, 10),
  get: parseInt(get, 10),
  start_date: new Date(start_date),
  end_date: new Date(end_date),
});

export const makePerfectPromotionData = async () => {
  const promotions = await loadPromotion();

  return promotions;
};
