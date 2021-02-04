import knex from "knex";

import knexfile from "../knexfile.js";

const configuration = knexfile;

export default knex(configuration);
