import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

import { db } from '@repo/database';

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Health Check & Database Connection Test
app.get('/health', async (req: Request, res: Response) => {
  try {
    await db.$queryRaw`SELECT 1`;
    
    res.status(200).json({ 
      success: true, 
      message: 'API is running and Database is connected successfully! 🚀' 
    });
  } catch (error) {
    console.error("DB Connection Error:", error);
    res.status(500).json({ 
      success: false, 
      message: 'Database connection failed!' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
