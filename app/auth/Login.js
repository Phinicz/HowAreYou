"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <li>
      <button
        className="bg-gray-700 text-white rounded-full px-2 py-1 text-sm"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </li>
  );
}
