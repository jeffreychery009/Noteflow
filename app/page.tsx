import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <>
      <div className="mt-28">
        <h2 className="h2-bold text-center">Noteflow</h2>
        <h1 className="h1-semi-bold mt-3 px-7 text-center">
          Welcome to Noteflow Where your thoughts take shape.
        </h1>
      </div>
      <div className="mt-12">
        <p className="body-regular px-12 text-center">
          Organize your thoughts, share ideas, and unlock smarter note-taking.
        </p>
      </div>
      <div>
        <div className="mt-80 flex justify-center">
          <Button className="btn-primary h-14 rounded-2xl ">
            <Link className="base-semi-bold tracking-wide" href="/register">
              Get Started
            </Link>
          </Button>
        </div>
        <div className="small-regular mt-3 flex justify-center">
          <span className="mr-2">Already have an account?</span>

          <Link className="text-primary" href="/log-in">
            Log-In
          </Link>
        </div>
      </div>
      <footer className="mt-24 flex justify-center">
        <div>
          <span className="small-medium">
            © 2024 Noteflow. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
