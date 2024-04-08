export default function Commonbtn(props) {
  return (
    <>
      <button className="bg-btn-gradient outline-none border-none sm:py-[14px] py-[11px] sm:px-[24px] px-[21px] rounded text-[#FDFDFF] sm:text-[16px] text-[14px] leading-[150%] font-semibold ff_outfit hover:shadow-[0_3px_20px_rgba(168,_84,_233,_1)] transition-all ease-linear duration-500">
        {props.btnname}
      </button>
    </>
  );
}
