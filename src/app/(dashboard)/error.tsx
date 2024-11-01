"use client";
import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col gap-y-4 items-center justify-center">
      <AlertTriangle className="size-6 text-muted-foreground" />
      <p className="text-sm text-muted-foreground ">Something went wrong</p>
      <Button variant="secondary" asChild>
        <Link href="/">Back home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
