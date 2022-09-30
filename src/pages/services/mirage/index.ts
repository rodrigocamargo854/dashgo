import { createServer, Factory, Model } from "miragejs";
import { faker } from '@faker-js/faker'
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
    factories: {
      user: Factory.extend({
        name(i:number) {
          return `User ${i+1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createAt() {
          return faker.date.recent(10,new Date());
        },
      }),
    },
    seeds(server) {
      server.createList('user',10)

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
