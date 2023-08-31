"use client";

import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarProps {
  user?: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <div className="relative">
      <div
        className="relative inline-block rounded-full overflow-hidden
        h-9 w-9 md:h-11 md:w-11"
      >
        <Image
          // src={user?.image || "/images/placeholder.jpg"}
          src={"/images/placeholder.jpg"}
          alt="avatar"
          fill
        />
      </div>
      <span
        className="absolute block rounded-full
       bg-green-500 ring-2 ring-white bottom-2 right-0 h-2 w-2"
      />
    </div>
  );
};

export default Avatar;
