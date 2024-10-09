import OngoingEvents from "./_components/OngoingEvents";
import Stats from "./_components/Stats";
import Transactions from "./_components/Transactions";

const OverviewPage = () => {
  return (
    <div>
      <h1 className="text-[#454545] font-semibold text-[40px] py-3">
        Welcome, Aishat!
      </h1>
      <div>
        <Stats />
      </div>
      <div>
        <OngoingEvents />
        <Transactions />
      </div>
    </div>
  );
};

export default OverviewPage;
