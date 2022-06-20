import database from "./database.js";

import user from "./models/user.js";

database.sync({force : true})