import Link from "next/link";
import { Button } from "@/components/ui/button";

const CreateEventPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[65vh] pt-10">
      <div className="max-w-[600px] w-full border-2 border-[#E7E7E7] rounded-[12px] md:rounded-[20px] px-2 py-8 md:p-8">
        <h1 className="text-[#0A2C66] text-[20px] text-center font-bold mb-6">
          Create New Event
        </h1>

        <div className="flex flex-col">
          <label className="text-[#454545] text-sm">Event Name:</label>
          <input
            className="rounded-[8px] bg-[#FCFCFC] border-2 border-[#E7E7E7] text-sm px-2 py-2"
            placeholder="Block Hack"
          />
        </div>

        <div className="flex flex-col mt-7">
          <label className="text-[#454545] text-sm">Event Description:</label>
          <textarea
            className="rounded-[8px] bg-[#FCFCFC] border-2 border-[#E7E7E7] text-sm px-2 py-2"
            placeholder="Placeholder"
          />
        </div>

        <div className="flex flex-col mt-7">
          <label className="text-[#454545] text-sm">Event Type:</label>
          <select className="rounded-[8px] bg-[#FCFCFC] border-2 border-[#E7E7E7] text-sm px-2 py-2">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        <div className="flex flex-col mt-7">
          <label className="text-[#454545] text-sm">Start Date:</label>
          <input
            type="date"
            className="rounded-[8px] bg-[#FCFCFC] border-2 border-[#E7E7E7] text-sm px-2 py-2"
            placeholder="Start Date"
          />
        </div>

        <div className="flex flex-col mt-7">
          <label className="text-[#454545] text-sm">End Date:</label>
          <input
            type="date"
            className="rounded-[8px] bg-[#FCFCFC] border-2 border-[#E7E7E7] text-sm px-2 py-2"
            placeholder="End Date"
          />
        </div>

        <Link href="/setup">
          <Button className="bg-[#0A2C66] w-full mt-7">
            Continue
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CreateEventPage;
