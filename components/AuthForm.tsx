"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import FormField from "./FormField";
import { useRouter } from "next/navigation";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      if (type === "sign-up") {
        // console.log("SIGN UP", values);

        toast.success("Account created successfully. Please log in!");
        router.push("/sign-in");
      } else {
        // console.log("SIGN IN", values);
        toast.success("Log in successfully. Welcome to Interviewly AI.");
        router.push("/");
      }
    } catch (error) {
      // console.log(error);

      toast.error(`There was an error: ${error}`);
    }
  }

  const isSignIn = type === "sign-in";

  return (
    <div className="card-border lg:min-w-[570px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row g justify-center">
          {/* LOGO & HEADING TAG */}
          <Image
            src="./interviewly-logo.svg"
            alt="logo"
            width={52}
            height={40}
          />
          <h2 className="text-primary-100">Interviewly AI</h2>
        </div>

        {/* TAGLINE */}

        <h3>Practice Job Interview With AI</h3>

        {/* FORM */}

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4 form"
          >
            {/* NAME : SHOULD BE SHOWN ON THE SIGN-UP PAGE */}
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Your Name"
                type="text"
              />
            )}

            {/* EMAIL */}

            <FormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Your email address"
              type="email"
            />

            {/* PASSWORD */}

            <FormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />

            {/* BUTTON */}

            <Button className="btn" type="submit">
              {isSignIn ? "Log in" : "Create an Account"}
            </Button>
          </form>
        </Form>

        {/* SWITCH PAGES */}
        <p className="text-center">
          {isSignIn ? "No account yet?" : "Already have an account?"}

          <Link
            href={!isSignIn ? "/sign-in" : "/sign-up"}
            className="font-bold text-user-primary ml-1"
          >
            {!isSignIn ? "Log in" : "Sign up"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
