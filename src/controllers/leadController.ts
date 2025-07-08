import { Request, Response } from "express";
import { leads, Lead } from "../memory/lead.model";

let currentId = 1;

export const getLeads = (req: Request, res: Response) => {
    res.json(leads);
};

export const getLead = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    console.log(id);

    const lead = leads.find((l) => l.id === id);
    console.log(lead);

    lead ? res.json(lead) : res.status(404).json({ message: "Lead not found" });
};

export const createLead = (req: Request, res: Response) => {
    const { name, email, phone, status } = req.body;

    if (!name) {
        return res.status(400).json({ message: "Name is required" });
    }

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    if (!phone) {
        return res.status(400).json({ message: "Phone is required" });
    }

    const emailExists = leads.some((lead) => lead.email === email);
    if (emailExists) {
        return res.status(400).json({ message: "Email already exists." });
    }
    const newLead: Lead = {
        id: currentId++,
        name,
        email,
        phone,
        status: status || "new",
    };
    leads.push(newLead);
    res.status(201).json(newLead);
};

export const updateLead = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const index = leads.findIndex((l) => l.id === id);
    if (index === -1) return res.status(404).json({ message: "Lead not found" });
    console.log(req.body);

    leads[index] = { ...leads[index], ...req.body };
    res.json(leads[index]);
};

export const deleteLead = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const index = leads.findIndex((l) => l.id === id);
    console.log(index);

    if (index === -1) return res.status(404).json({ message: "Lead not found" });

    leads.splice(index, 1);
    res.status(200).json({ message: "Success deleted" });
};
