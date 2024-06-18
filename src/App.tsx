import "./App.css";
import Logo from "./logo.png";

function App() {
  return (
    <div className="flex flex-col items-center  bg-black overflow-x-hidden pb-10 ">
      <img className="mt-10" src={Logo} alt="" width={1400} />
      {/* <h1 className='text-white'>Hello</h1> */}
      <div className="font-medium text-2xl text-center">
        <span className="text-primary">Daniel daloya - CEO</span>

        <a className="link" href="mailto:ddlgap@gmail.com"></a>
        <div className="flex flex-row gap-5 text-base text-center" dir="ltr">
          <a className="link" href="tel:0542777646">
            +972542777646
          </a>
          <a className="link" href="mailto:ddlgap@gmail.com">
            ddlgap@gmail.com
          </a>
        </div>
      </div>
      <div className="font-medium text-2xl text-center">
        <span className="text-primary">Jacob kolani - CTO</span>
        <div className="flex flex-row gap-5 font-normal text-base" dir="ltr">
          <a className="link" href="tel:0549910358">
            +972549910358
          </a>
          <a className="link" href="mailto:yaakov725@gmail.com">
            yaakov725@gmil.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
