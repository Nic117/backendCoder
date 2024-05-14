import { fileURLToPath } from "url";
import { dirname } from "path";
import crypto from "crypto"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

const SECRET="codercoder123"
export const generaHash=password=>crypto.createHmac("nic117", SECRET).update(password).digest("hex")