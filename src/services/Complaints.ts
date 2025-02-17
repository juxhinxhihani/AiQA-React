import { api } from "./api";
import { ComplaintRequest, ComplaintResponse } from "../types";

export const complaintService = {
  async submitComplaint(
    complaint: ComplaintRequest
  ): Promise<ComplaintResponse> {
    return api.post("/TextClassification/Claude", complaint);
  },
};
