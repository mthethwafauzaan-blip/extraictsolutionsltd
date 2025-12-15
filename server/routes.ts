import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteRequestSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/quote-requests", async (req, res) => {
    try {
      const parsed = insertQuoteRequestSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid request data", details: parsed.error.errors });
      }
      
      const quoteRequest = await storage.createQuoteRequest(parsed.data);
      return res.status(201).json(quoteRequest);
    } catch (error) {
      console.error("Error creating quote request:", error);
      return res.status(500).json({ error: "Failed to submit quote request" });
    }
  });

  app.get("/api/quote-requests", async (req, res) => {
    try {
      const requests = await storage.getQuoteRequests();
      return res.json(requests);
    } catch (error) {
      console.error("Error fetching quote requests:", error);
      return res.status(500).json({ error: "Failed to fetch quote requests" });
    }
  });

  return httpServer;
}
