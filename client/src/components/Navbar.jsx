const Navbar = (props) => {
  return (
    <>
      <div className="w-screen h-[10vh] bg-slate-800 text-white">
        Nav will come here
      </div>
      <div className="w-screen h-[90vh] bg-slate-300">{props.children}</div>
    </>
  );
};

export default Navbar;
