

const LayoutHeader = () => {
  return (
    <div
      className={`container mx-auto px-12 max-sm:px-6 py-4  shadow-lg rounded-2xl`}
    >
      <div className="flex items-center justify-between">
        <div className="text-xl font-black">
          <p className="max-[400px]:hidden text-5xl ml-42">Boris</p>
        </div>
        <div className="max-lg:hidden flex items-center justify-center gap-8 font-bold text-lg rounded-full border border-gray-200 py-4 px-12 shadow-md">
          <a className="active:translate-y-0.5" href="/home">
            Home
          </a>
          <a className="active:translate-y-0.5" href="/about">
            About
          </a>
          <a className="active:translate-y-0.5" href="/contact">
            Contact
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default LayoutHeader;
