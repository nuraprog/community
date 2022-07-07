import { useQuery, useBody } from "h3";
import { add } from "../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const query = useQuery(event.req);
    const body = await useBody(event.req);

    add(query.col as string, body);
  } catch (err) {
    return err.message;
  }
});
