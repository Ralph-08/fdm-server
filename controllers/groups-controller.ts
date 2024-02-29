const knex = require("knex")(require("../knexfile"));
import { Request, Response } from "express";

const getGroups = async (_req: Request, res: Response) => {
  try {
    const groups = knex("groups");
    res.status(200).json(groups);
  } catch (err) {
    res.status(500).send("Error getting users: " + err);
  }
};

module.exports = {
  getGroups,
};
