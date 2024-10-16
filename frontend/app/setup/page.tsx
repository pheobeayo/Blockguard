import Image from "next/image";
import Company from "@/assets/signing/company.svg";
import People from "@/assets/signing/people.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SetupPage = () => {
  return (
    <div className="flex justify-center items-center min-h-[65vh] pt-10">
      <div className="max-w-[600px] w-full border-2 border-[#E7E7E7] rounded-[12px] md:rounded-[20px] px-2 py-8 md:p-8">
        <h1 className="text-[#0A2C66] text-[20px] text-center font-bold mb-6">
          Setup Account
        </h1>

        <div className="flex flex-col">
          <label className="text-[#454545] text-sm">Username:</label>
          <input
            className="rounded-[8px] bg-[#FCFCFC] border-2 border-[#E7E7E7] text-sm px-2 py-2"
            placeholder="Block.0xnerd"
          />
        </div>

        <div className="flex flex-col mt-7">
          <label className="text-[#454545] text-sm">Email Address:</label>
          <input
            className="rounded-[8px] bg-[#FCFCFC] border-2 border-[#E7E7E7] text-sm px-2 py-2"
            placeholder="example@gmail.com"
          />
        </div>

        <div className="flex flex-col mt-7">
          <label className="text-[#454545] text-sm">
            Which best describes you?
          </label>
          <div className="flex space-x-2 md:space-x-5 mt-2">
            <div className="bg-[#FCFCFC] border-2 border-[#E7E7E7] flex flex-col justify-center items-center w-[180px] text-sm space-y-2 p-4 rounded-[8px]">
              <Image src={Company} alt="company" />
              <p>Company</p>
            </div>
            <div className="bg-[#FCFCFC] border-2 border-[#E7E7E7] flex flex-col justify-center items-center w-[180px] text-sm space-y-2 p-4 rounded-[8px]">
              <Image src={People} alt="people" />
              <p>Developers/Participants</p>
            </div>
          </div>
        </div>

        <Link href="/setup">
          <Button className="bg-[#0A2C66] w-full mt-7">
            Continue <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SetupPage;
