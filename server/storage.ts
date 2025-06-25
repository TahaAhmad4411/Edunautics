import { newsletters, type Newsletter, type InsertNewsletter } from "@shared/schema";

export interface IStorage {
  createNewsletterSubscription(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletterSubscription(email: string): Promise<Newsletter | undefined>;
  getAllNewsletterSubscriptions(): Promise<Newsletter[]>;
}

export class MemStorage implements IStorage {
  private newsletters: Map<string, Newsletter>;
  private currentId: number;

  constructor() {
    this.newsletters = new Map();
    this.currentId = 1;
  }

  async createNewsletterSubscription(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const existing = await this.getNewsletterSubscription(insertNewsletter.email);
    if (existing) {
      throw new Error("Email already subscribed");
    }

    const id = this.currentId++;
    const newsletter: Newsletter = {
      ...insertNewsletter,
      id,
      subscribedAt: new Date(),
    };
    this.newsletters.set(insertNewsletter.email, newsletter);
    return newsletter;
  }

  async getNewsletterSubscription(email: string): Promise<Newsletter | undefined> {
    return this.newsletters.get(email);
  }

  async getAllNewsletterSubscriptions(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }
}

export const storage = new MemStorage();
