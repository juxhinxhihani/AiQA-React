export interface ComplaintResponse {
  generation: string;
  clientResponse: string;
  prompt_token_count: number;
  generation_token_count: number;
  stop_reason: string;
}
