"use client";

import { useSession } from "next-auth/react";

const Chats = () => {
  const { data: session } = useSession();
  return <div>Chats</div>;
};

export default Chats;
