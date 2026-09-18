import { apiRequest } from "./api";

interface HealthResponse {
  status: string;
  message: string;
}

export function getHealth(): Promise<HealthResponse> {
  return apiRequest<HealthResponse>("/api/health");
}