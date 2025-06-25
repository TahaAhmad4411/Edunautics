import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const data = insertNewsletterSchema.parse(req.body);
      const newsletter = await storage.createNewsletterSubscription(data);
      res.json({ message: "Successfully subscribed to newsletter", data: newsletter });
    } catch (error: any) {
      if (error.message === "Email already subscribed") {
        res.status(400).json({ message: "This email is already subscribed to our newsletter" });
      } else if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid email address" });
      } else {
        res.status(500).json({ message: "Failed to subscribe to newsletter" });
      }
    }
  });

  // Get newsletter subscriptions (for admin purposes)
  app.get("/api/newsletter/subscriptions", async (req, res) => {
    try {
      const subscriptions = await storage.getAllNewsletterSubscriptions();
      res.json(subscriptions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch subscriptions" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
