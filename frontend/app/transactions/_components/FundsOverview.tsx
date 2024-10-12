import MoneyIcon from "@/assets/eventList/money.svg";
import Image from "next/image";

const FundsOverview = () => {
  return (
    <div>
      <div className="bg-white border-[#D7D9E4] border rounded-lg shadow-sm p-6">
        <div className="flex flex-row space-x-2 items-center">
          <div className="bg-[#D3EFFF] p-3 rounded-full">
            <Image src={MoneyIcon} alt="img" className="w-4 h-4" />
          </div>
          <h3 className="text-sm text-[#454545] text-center font-normal">
            Funds Overview
          </h3>
        </div>
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm text-[#454545] text-center font-normal">
              Total Funds Staked
            </h3>
            <h3 className="mt-2 text-[#454545] text-[30px] font-bold">25ETH</h3>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default FundsOverview;
