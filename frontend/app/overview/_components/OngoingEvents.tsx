import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import Image1 from "@/assets/eventList/image1.png";
import Image2 from "@/assets/eventList/image2.png";
import Image3 from "@/assets/eventList/image3.png";
import Gift from "@/assets/eventList/gift.svg";
import Date from "@/assets/eventList/date.svg";
import People from "@/assets/eventList/people.svg";
import Image from "next/image";

const OngoingEvents = () => {
  const events = [
    {
      type: "Closed",
      image: Image1,
      title: "BlockGuard Hack",
      about:
        "These pages reflect a real-world, user-friendly blockchain platform that emphasizes trust, transparency, and automation. Let me know if you'd like more specific examples or additional features!",
      amount: "12,000USD",
      date: "Sept. 12 - Oct 13th",
      noOfParticipants: "105 participants",
    },
    {
      type: "Ongoing",
      image: Image2,
      title: "BlockGuard Hack",
      about:
        "These pages reflect a real-world, user-friendly blockchain platform that emphasizes trust, transparency, and automation. Let me know if you'd like more specific examples or additional features!",
      amount: "12,000USD",
      date: "Sept. 12 - Oct 13th",
      noOfParticipants: "105 participants",
    },
    {
      type: "Ongoing",
      image: Image3,
      title: "BlockGuard Hack",
      about:
        "These pages reflect a real-world, user-friendly blockchain platform that emphasizes trust, transparency, and automation. Let me know if you'd like more specific examples or additional features!",
      amount: "12,000USD",
      date: "Sept. 12 - Oct 13th",
      noOfParticipants: "105 participants",
    },
  ];
  return (
    <div className="pt-10">
      <div className="flex justify-between items-center">
        <h3 className="text-[#5D5D5D] text-[18px] font-bold">
          Ongoing Events (3)
        </h3>
        <Link href="/setup">
          <Button className="bg-[#0A2C66] font-bold text-sm">
            <Plus className="mr-2 h-4 w-4" /> Create New Event
          </Button>
        </Link>
      </div>

      <div>
        {events.map((item, index) => (
          <div key={index} className="flex border-[1.5px] border-[#E7E7E7]">
            <div className="w-[390px]">
              <Image src={item.image} alt="img" className="w-full" />
            </div>

            <div>
              <h2 className="text-[#454545] font-bold text-[18px]">{item.title}</h2>
              <p className="text-[#454545] text-sm">{item.about}</p>
              <div className="flex items-center space-x-2 text-xs text-[#454545]">
                <Image src={Gift} alt="img" />
                <p>{item.amount}</p>
              </div>
              <div className="flex items-center space-x-2 text-xs text-[#454545]">
                <Image src={Date} alt="img" />
                <p>{item.date}</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2 text-xs text-[#454545]">
                  <Image src={People} alt="img" />
                  <p>{item.noOfParticipants}</p>
                </div>
                <p className="text-xs underline text-[#00A479]">View Participants</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OngoingEvents;
