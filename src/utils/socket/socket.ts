import { io } from "socket.io-client";

export const socket = io(import.meta.env.VITE_PUBLIC_SOCKET_PORT, {
  path: "/socket/",
  withCredentials: true,
});
