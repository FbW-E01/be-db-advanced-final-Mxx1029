import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables
const { error } = dotenv.config();
if (error) {
    console.error("Error loading configuration from .env", error);
    process.exit(1);
}

if (!process.env.PORT) {
    console.error("Missing environment variable; check .env values");
    process.exit(1);
}

export default function config(app) {
    // Log all requests
    app.use((req,res,next) => {
        console.log(`[Request] ${req.method} ${req.path}`);
        next();
    });

    app.use(cors());
    app.use(express.json());
}