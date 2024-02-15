"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { requestRegister } from "@/lib/fetchAPI";
import toast from "react-hot-toast";
import Link from "next/link";
import { LogoWithText } from "@/components/Logo";


export const RegisterForm = () => {
  const router = useRouter();

  async function handleRegister(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const req = await requestRegister(name, email, password);

    if (req.message === "User registered successfully") {
      toast.success(req.message);
      router.push("/login");
      return;
    }
    toast.error(req.message);
  }

  return (
    <div className="flex flex-col m-auto max-w-80">
      <LogoWithText />
      <h1 className="text-4xl pt-6 font-extrabold tracking-tight">Create an Account</h1>
      <form onSubmit={handleRegister} className="pt-10">
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="input input-bordered w-full"
        />

        <label>Email address</label>
        <input
          type="email"
          name="email"
          className="input input-bordered w-full"
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="input input-bordered w-full"
        />

        <button className="button btn-primary self-stretch text-sm h-11 mt-8">Register</button>
      </form>
      <p className="text-sm self-center mt-10 font-semibold text-[#4d4d4d]">
        Already have account?{" "}
        <Link href={"/login"} className="font-bold text-blue-700 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};
