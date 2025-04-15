import InterviewCard from "@/components/InterviewCard";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
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

        {/* 🟢 Border beam effect only on the image */}
        <div className="relative rounded max-sm:hidden">
          <BorderBeam
            duration={6}
            size={270}
            className="from-transparent via-red-500 to-transparent"
          />
          <BorderBeam
            duration={6}
            delay={3}
            size={270}
            className="from-transparent via-blue-500 to-transparent"
          />

          <Image
            src="/home-card-banner.png"
            alt="card-image-home"
            width={450}
            height={450}
            className="rounded"
          />
        </div>
      </section>

      <section className="flex flex-col gap-7 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
          {/* <p>You haven&apos;t taken any interviews yet</p> */}
        </div>
      </section>

      <section className="flex flex-col gap-7 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
          {/* <p>There are no interviews available</p> */}
        </div>
      </section>
    </>
  );
};

export default Page;
