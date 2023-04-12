const SidebarElement = ({ Icon, title, open }: any) => {
  return (
    <div className="inline-flex pb-5">
      <Icon
        className={`bg-amber-300 text-4xl rounded cursor-pointer mr-2 duration-500 ${
          open && "rotate-[360deg]"
        }`}
      />
      <h1
        className={`text-white origin-left font-medium text-2xl duration-300 ${
          !open && "scale-0"
        }`}
      >
        {title}
      </h1>
    </div>
  );
};

export default SidebarElement;
