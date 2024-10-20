import Image from "next/image";
import { Button } from "../..";
import { HeaderType } from "@/app/common/types";

const Header = ({ showForm, setShowForm }: HeaderType) => {
  return (
    <div className="flex justify-between items-center mb-[40px]">
      <div className="flex items-center gap-[16px]">
        <Image src={"/Image/logo.png"} alt={"logo"} width={68} height={68} />
        <h1 className="text-[42px] uppercase mt-[6px] leading-none">
          Today I Learned
        </h1>
      </div>
      <Button
        className={
          "bg-custom-gradient uppercase text-[17px] rounded-[100px] cursor-pointer px-[16px] py-[13px] leading-none transition-transform duration-300 transform hover:scale-110 hover:-rotate-2"
        }
        onClick={() => setShowForm((show: boolean) => !show)}
      >
        {showForm ? "Close" : "Share a fact"}
      </Button>
    </div>
  );
};

export default Header;
