export interface Donor {
  id?: number;  // <-- optional
  name?: string;
  bloodGroup?: string;
  phone?: string;
  lastDonationDate?: string;
  age?: number;
  city?: string;
}
