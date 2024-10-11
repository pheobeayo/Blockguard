import { Button } from "@/components/ui/button";
import Image from "next/image";
import Money from "@/assets/eventList/money.svg";
import LinkIcon from "@/assets/eventList/link.svg";
import { Dispatch, SetStateAction } from "react";

const StepTwo = ({
    setCurrentStep,
  }: {
    setCurrentStep: Dispatch<SetStateAction<number>>;
  }) => {
  return (
    <div className="flex justify-center items-center min-h-[65vh] pt-10">
      <div className="max-w-[600px] w-full border-2 border-[#E7E7E7] rounded-[12px] md:rounded-[20px] px-2 py-8 md:p-8">
        <h1 className="text-[#0A2C66] text-[20px] text-center font-bold mb-1">
          Stake Funds
        </h1>
        <p className="text-sm text-[#454545] text-center mb-6">
          Lock prize funds in smart contracts
        </p>

        <div className="flex flex-col">
          <label className="text-[#454545] text-sm">Amount:</label>
          <input
            className="rounded-[8px] bg-[#FCFCFC] border-2 border-[#E7E7E7] text-sm px-2 py-2"
            placeholder="Block Hack"
          />
        </div>

        <div className="flex flex-col mt-7">
          <label className="text-[#454545] text-sm">
            Select price funds source.
          </label>
          <div className="flex space-x-2 md:space-x-5 mt-2">
            <div className="bg-[#FCFCFC] border-2 border-[#E7E7E7] flex flex-col justify-center items-center w-[180px] text-sm space-y-2 p-4 rounded-[8px]">
              <Image src={Money} alt="company" />
              <p>Connected Metamask</p>
            </div>
            <div className="bg-[#FCFCFC] border-2 border-[#E7E7E7] flex flex-col justify-center items-center w-[180px] text-sm space-y-2 p-4 rounded-[8px]">
              <Image src={LinkIcon} alt="people" />
              <p>Connect new wallet</p>
            </div>
          </div>
        </div>

        <Button className="bg-[#0A2C66] w-full mt-7" onClick={() => setCurrentStep(3)}>Stake Funds</Button>
      </div>
    </div>
  );
};

export default StepTwo;
