import { user } from "./util/model";

const baseUrl = "http://localhost:3000";
const headers = {
  "Content-type": "application/json",
};

const getAllUsers = (): Promise<user[]> => {
  return fetch(`${baseUrl}/users`).then((data) => data.json());
};

const getUserById = (id: number): Promise<user> => {
  return fetch(`${baseUrl}/users/${id}`).then((data) => data.json());
};

const getUserByNameOrEmail = (searchString: string): Promise<user | null> => {
  return getAllUsers().then((users: user[]) => {
    const foundUser = users.find(
      (user) => user.name === searchString || user.email === searchString
    );
    return foundUser || null;
  });
};

const createUser = ({ name, email, phone, password }: Partial<user>) => {
  return fetch(`${baseUrl}/users`, {
    method: "POST",
    headers,
    body: JSON.stringify({ name, email, phone, password }),
  }).then((data) => data.json());
};

const deleteUser = (id: number) => {
  return fetch(`${baseUrl}/transactions/${id}`, {
    method: "DELETE",
  })
    .then((response) => response)
    .catch((error) => console.error(error));
};

const updateUser = (id: number, updatedUser: Partial<user>) => {
  return fetch(`${baseUrl}/users/${id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify(updatedUser),
  });
};

export const userRequests = {
  getAllUsers,
  getUserById,
  getUserByNameOrEmail,
  createUser,
  deleteUser,
  updateUser,
};
