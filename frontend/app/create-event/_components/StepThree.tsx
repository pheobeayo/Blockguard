import { Button } from "@/components/ui/button";
import React from "react";

const StepThree = () => {
  return (
    <div className="flex justify-center items-center min-h-[65vh] pt-10">
      <div className="max-w-[600px] w-full border-2 border-[#E7E7E7] rounded-[12px] md:rounded-[20px] px-2 py-8 md:p-8">
        <h1 className="text-[#0A2C66] text-[20px] text-center font-bold mb-6">
          Confirmation
        </h1>

        <div className="flex flex-col space-y-4">
          <div className="text-[#454545] text-sm">
            <p>Event Name:</p>
            <p className="font-bold">Block Hack</p>
          </div>
          <div className="text-[#454545] text-sm">
            <p>Event Description:</p>
            <p>
              This design integrates wallet-based signups, automated prize
              distribution, and easy management for companies, developers, and
              organizers. Let me know if you'd like more details or changes to
              specific pages!
            </p>
          </div>
          <div className="text-[#454545] text-sm">
            <p>Event Type:</p>
            <p className="font-bold">Hackathon</p>
          </div>
          <div className="text-[#454545] text-sm flex space-x-3 justify-between">
            <div>
              <p>Start date:</p>
              <p className="font-bold">12th Sept. 2024</p>
            </div>
            <div>
              <p>End date:</p>
              <p className="font-bold">12th Oct. 2024</p>
            </div>
          </div>
        </div>

        <div className="text-[#454545] text-sm mt-10">
          <div>
            <p>Amount:</p>
            <p className="font-bold mb-4">$12,000</p>
          </div>
          <div>
            <p>Prize fund source:</p>
            <p className="font-bold">Metamask</p>
          </div>
        </div>

        <Button className="bg-[#0A2C66] w-full mt-7">Create Event</Button>
      </div>
    </div>
  );
};

export default StepThree;
