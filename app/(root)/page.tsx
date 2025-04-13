import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-7 max-w-lg">
          <h2>Your AI Interview Coach — Anytime, Anywhere</h2>
          <p className="text-lg">
            Speak with AI, answer real questions, and get feedback on the spot.
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/home-card-banner.png"
          alt="card-image-home"
          width={450}
          height={700}
          className="rounded max-sm:hidden"
        />
      </section>
    </>
  );
};

export default Page;
