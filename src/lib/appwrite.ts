import "server-only";
import { Client, Account, Storage, Users, Databases } from "node-appwrite";

export async function createAdminClient() {
  const client = new Client()
    .setKey(process.env.NEXT_APPWRITE_KEY!)
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

  return {
    get account() {
      return new Account(client);
    },
  };
}
