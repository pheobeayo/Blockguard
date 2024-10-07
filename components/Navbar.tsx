import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-[1400px] mx-auto px-3 md:px-6 py-4 border-b shadow-sm">
      <label className="font-bold text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-[#0A2C66] via-[#0A2C66] to-[#00E6A9]">
        BlockGuard
      </label>

      <div className="flex space-x-3 text-[#454545]">
        <Link href="/events">Events</Link>
        <Link href="/how-it-works">How It Works</Link>
      </div>

      <div className="flex space-x-3">
        <Button className="bg-[#0A2C66]"><LogIn className="w-4 h-4 mr-2" /> Sign Up</Button>
        <Button variant="outline" className="text-[#005544]"><LogIn className="w-4 h-4 mr-2" /> Sign In</Button>
      </div>
    </div>
  );
};

export default Navbar;
