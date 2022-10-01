import { createServer, Factory, Model, Response } from "miragejs";
import { faker } from "@faker-js/faker";
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
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createAt() {
          return faker.date.recent(10, new Date());
        },
      }),
    },
    seeds(server) {
      server.createList("user", 10);
    },
    routes() {
      //mocking api routing folder
      this.namespace = "api";
      //delay to testing loading
      this.timing = 750;

      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("user").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all("user")).users.slice(
          pageStart,
          pageEnd
        );
        return new Response(
          200,
          {
            "x-total-count": String(total),
          },
          { users }
        );
      });
      this.post("/users");
      //reset routes
      this.namespace = "";

      this.passthrough();
    },
  });

  return server;
}
