import Client from "./client";

const client = new Client("");
client.person.get().then(console.log);
