import { z } from "zod";

const urlSchema = z.string().url();
const urlsSchema = z.array(urlSchema);

export { urlSchema, urlsSchema };
