import EventList from "@/components/EventList";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const EventPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-6 px-2 rounded-t-lg mb-5">
        <h1 className="text-[#454545] font-semibold text-[40px] py-3">
          All Events
        </h1>
        <Link href="/setup">
          <Button className="bg-[#0A2C66] font-bold text-sm">
            <Plus className="mr-0 md:mr-2 h-4 w-4" />{" "}
            <p className="hidden md:flex">Create New Event</p>
          </Button>
        </Link>
      </div>

     {/* Tabs from shad then display events */}
    </div>
  );
};

export default EventPage;
