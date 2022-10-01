import { useQuery } from "react-query";
import { api } from "../../api";

export type Users = {
  id: string;
  name: string;
  email: string;
  createAt: string;
};

export async function geUsers() : Promise<Users[]> {
  const { data } = await api.get("users");

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createAt: new Date(user.createAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });
  return users;
}

export function useUsers() {
  return useQuery("users", geUsers, {
    staleTime: 1000 * 5, //5seconds,
  });
}

// import { useQuery } from "react-query";
// import { api } from "../../api";

// export function useUsers() {
//   return useQuery(
//     "users",
//     async () => {
//       const { data } = await api.get("users");

//       const users = data.users.map((user) => {
//         return {
//           id: user.id,
//           name: user.name,
//           email: user.email,
//           createAt: new Date(user.createAt).toLocaleDateString("pt-BR", {
//             day: "2-digit",
//             month: "long",
//             year: "numeric",
//           }),
//         };
//       });
//       return users;
//     },
//     {
//       staleTime: 1000 * 5, //5seconds,
//     }
//   );
// }
