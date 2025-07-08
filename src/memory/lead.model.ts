export interface Lead {
    id: number;
    name: string;
    email: string;
    phone: string;
    status: "new" | "junior" | "mid" | "senior";
}

export const leads: Lead[] = [];
