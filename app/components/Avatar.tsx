"use client";

import { User } from "@prisma/client";
import Image from "next/image";
import useActiveList from "../hooks/useActiveList";

interface AvatarProps {
  user?: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  const { members } = useActiveList();
  const isActive = members.indexOf(user?.email!) !== -1;
  console.log({ isActive });
  return (
    <div className="relative">
      <div
        className="relative inline-block rounded-full overflow-hidden
        h-9 w-9 md:h-11 md:w-11"
      >
        <Image
          src={user?.image || "/images/placeholder.jpg"}
          alt="avatar"
          fill
        />
      </div>
      {isActive ? (
        <span
          className="absolute block rounded-full
           bg-green-500 ring-2 ring-white bottom-2 right-0 h-2 w-2"
        />
      ) : (
        <span
          className="absolute block rounded-full
           bg-red-500 ring-2 ring-white bottom-2 right-0 h-2 w-2"
        />
      )}
    </div>
  );
};

export default Avatar;
