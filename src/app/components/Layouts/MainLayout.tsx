import { MaynlayoutType } from "@/app/types";

const MainLayout = ({ children }: MaynlayoutType) => {
  return (
    <div className="bg-[#292524] text-[#fafaf9] flex flex-col min-h-screen px-[64px] py-[24px]">
      {children}
    </div>
  );
};

export default MainLayout;
