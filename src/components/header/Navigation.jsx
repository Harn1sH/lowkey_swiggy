export default function Navigation() {
  return (
    <>
      <div className=" border-b-2 border-black p-3 flex justify-between">
        <div>img</div>
        <div className="flex gap-x-4 text-[15px] font-semibold">
          <span className="cursor-pointer hover:scale-110 transition-all duration-150">
            Home
          </span>
          <span className="cursor-pointer hover:scale-110 transition-all duration-150">
            About Us
          </span>
          <span className="cursor-pointer hover:scale-110 transition-all duration-150">
            Contact Us
          </span>
        </div>
      </div>
    </>
  );
}
