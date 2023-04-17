import Button from "../helpers/Button";

const Header = () => {
  return (
    <div
      className="flex bg-dark-purple w-screen h-30 items-center justify-between px-5 invisible"
      style={{ position: "fixed", top: 0, left: 0 }}
    >
      <div className="flex items-center"></div>
      <div className="flex visible">
        <Button text="Home" className="text-white" type={"submit"} />
        <Button text="Dashboard" className="text-white" type={"submit"} />
        <Button text="Contact" className="text-white" type={"submit"} />
        <Button
          text="Sign In"
          className="text-white origin-left font-medium text-2xl duration-300 pr-5"
          type={"submit"}
        />
        <Button
          text="Register"
          className="text-white origin-left font-medium text-2xl duration-300"
          type={"submit"}
        />
      </div>
    </div>
  );
};

export default Header;
