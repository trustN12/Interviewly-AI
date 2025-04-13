import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-layout">
      {/* NAVBAR */}
      <nav>
        <Link href="/" className="flex items-center">
          <Image src="/ai-avatar.png" alt="logo" width={50} height={50} />
          <h2 className="text-orange-100">Interviewly AI</h2>
        </Link>
      </nav>

      {/* OTHERS/ CHILDREN ITEMS */}

      {children}
    </div>
  );
};

export default RootLayout;
