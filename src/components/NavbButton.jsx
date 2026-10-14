"use client";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NavbButton = () => {

  const router = useRouter();
  const { data: session } = useSession();
//   console.log(session);

  const handleSingOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in"); // redirect to login page
        },
      },
    });
  };

  return (
    <div>
      {session?.user ? (
        <>
          <Button onClick={handleSingOut}>Logout</Button>
        </>
      ) : (
        <>
          <div className="flex  gap-3 items-center">
            <Link href="/sign-in">
              <button className="btn rounded-full">Login</button>
            </Link>
            <Link href="/sign-up">
              <button className="btn bg-[#0485f7] text-white px-3 py-2 rounded-full">
                Sign Up
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default NavbButton;
