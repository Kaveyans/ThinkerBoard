import { ratelimit } from "../config/upstash.js"; 

export const rateLimitMiddleware = async (req, res, next) => {
  const ip = req.ip || "anonymous"; 

  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return res.status(429).json({ error: "Too many requests. Please try again later." });
  }

  next(); // Allow request
};
