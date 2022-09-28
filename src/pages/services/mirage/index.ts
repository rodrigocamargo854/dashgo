import { createServer, Model } from "miragejs";

type user = {
  name: string;
  email: string;
  create_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<user>>({}),
    },
    routes() {
      //mocking api routing folder
      this.namespace = "api";
      //delay to testing loading
      this.timing = 750;

      this.get("/users");
      this.post("/users");
      //reset routes
      this.namespace = "";

      this.passthrough();
    },
  });

  return server;
}
