import Image from "next/image";
import Link from "next/link";

import UserButton from "@/features/auth/components/user-button";

interface StandAloneLayoutProps {
  children: React.ReactNode;
}

const StandAloneLayout = ({ children }: StandAloneLayoutProps) => {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center h-[73px]">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" height={56} width={56} />
          </Link>
          <UserButton />
        </nav>
        <div className="flex flex-col items-center justify-center p-y-4 ">
          {children}
        </div>
      </div>
    </main>
  );
};

export default StandAloneLayout;
