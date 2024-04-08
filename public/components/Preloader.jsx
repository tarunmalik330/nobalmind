import { Logo } from "./IconImg";

export default function Preloader() {
  return (
    <>
      <div className="loading min-h-screen fixed flex flex-col justify-center items-center left-0 right-0">
        <div className="flex justify-center flex-col items-center">
          <Logo />
          <div>
            <span className="inline-block align-middle w-[9px] mx-1 h-[9px] bg-[#6022EA] rounded-[9px]"></span>
            <span className="inline-block align-middle w-[9px] mx-1 h-[9px] bg-[#6022EA] rounded-[9px]"></span>
            <span className="inline-block align-middle w-[9px] mx-1 h-[9px] bg-[#6022EA] rounded-[9px]"></span>
            <span className="inline-block align-middle w-[9px] mx-1 h-[9px] bg-[#6022EA] rounded-[9px]"></span>
            <span className="inline-block align-middle w-[9px] mx-1 h-[9px] bg-[#6022EA] rounded-[9px]"></span>
            <span className="inline-block align-middle w-[9px] mx-1 h-[9px] bg-[#6022EA] rounded-[9px]"></span>
            <span className="inline-block align-middle w-[9px] mx-1 h-[9px] bg-[#6022EA] rounded-[9px]"></span>
          </div>
        </div>
      </div>
    </>
  );
}
