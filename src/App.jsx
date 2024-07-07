import { useState } from "react";
import logo from "/logo.svg";

function App() {
  return (
    <div className="lowercase">
      <header className="py-5 px-0 bg-[#111e4c]">
        <div className="max-w-[83.13rem] py-0 px-3.5 my-0 m-auto flex items-center justify-between gap-x-5">
          <a className="inline-block text-inherit" href="/">
            <img src={logo} alt="WebDev" />
          </a>
          <nav>
            <ul className="list-none flex items-center gap-x-[3.44rem] text-[#a8b7e7] text-[1.06rem] leading-6 leading-[155%]">
              <li className="hover:text-[#fff]">
                <a className="inline-block text-inherit" href="#">
                  About me
                </a>
              </li>
              <li className="hover:text-[#fff]">
                <a className="inline-block text-inherit" href="#">
                  Services
                </a>
              </li>
              <li className="hover:text-[#fff]">
                <a className="inline-block text-inherit" href="#">
                  Portfolio
                </a>
              </li>
              <li className="hover:text-[#fff]">
                <a className="inline-block text-inherit" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="py-28  px-0  bg-[#111e4c]">
          <div className="max-w-[83.13rem] py-0 px-3.5 my-0 m-auto flex items-center justify-between gap-x-5">
            <div className="flex flex-col items-center gap-y-10">
              <h1 className="text-[5.63rem] leading-none text-[#a8b7e7] font-bold leading-[122%] text-center">
                <span className="text-[#009dff]">Professional</span> development
                of websites
              </h1>
              <p className="max-w-[51.00rem] text-2xl leading-[155%] text-[#a8b7e7] text-center">
                Leading digital developer with solid design and development
                expertise. We build readymade websites mobile AND applications
              </p>
              <button className="cursor-pointer py-3 px-10 rounded-2xl h-16 min-w-[15.00rem] bg-[#009dff26] text-[#009dff] text-2xl hover:bg-[#009dff] hover:text-[#fff]">
                Services
              </button>
            </div>
          </div>
        </section>
        <section className="mt-28">
          <div className="max-w-[83.13rem] py-0 px-3.5 my-0 mx-40 m-auto">
            <div className="flex items-center justify-between gap-x-5 box-border">
              <h2 className="text-5xl font-bold text-[#111e4c]">
                Why do people choose me?
              </h2>
              <p className="text-2xl leading-[155%] text-[#a8b7e7]">
                Hi. My name is <span className="text-[#111e4c]"> Mark </span>.{" "}
                <br />I am a
                <span className="text-[#111e4c]"> web developer </span>
                <span className="text-[#a8b7e7]">
                  with 7 years of experience.
                </span>
              </p>
            </div>
            <div className="flex items-center justify-between gap-x-[4.38rem] mt-16">
              <div className="grid grid-cols-[1fr_1fr] gap-[60px_80px]">
                <div>
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#009dff26]">
                    <img src="/icons/puzzle.svg" alt="puzzle" />
                  </div>
                  <h3 className="font-normal mt-6 text-2xl leading-[155%] text-[#111e4c]">
                    <strong>Attention to detail</strong>
                  </h3>
                  <p className="mt-3 text-[1.06rem] leading-6 leading-[155%] text-[#a8b7e7]">
                    Thorough study of layouts and specifics of display on
                    various devices
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#009dff26]">
                    <img
                      src="/icons/nano-technology.svg"
                      alt="nano-technology"
                    />
                  </div>
                  <h3 className="font-normal mt-6 text-2xl leading-[155%] text-[#111e4c]">
                    <strong>Modern tools</strong>
                  </h3>
                  <p className="mt-3 text-[1.06rem] leading-6 leading-[155%] text-[#a8b7e7]">
                    Tracking and applying modern technologies and web design
                    trends
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#009dff26]">
                    <img src="/icons/reputation.svg" alt="reputation" />
                  </div>
                  <h3 className="font-normal mt-6 text-2xl leading-[155%] text-[#111e4c]">
                    <strong>100% reputation</strong>
                  </h3>
                  <p className="mt-3 text-[1.06rem] leading-6 leading-[155%] text-[#a8b7e7]">
                    It is important for me not only to hand over the project,
                    but to make it high quality
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#009dff26]">
                    <img src="/icons/like.svg" alt="like" />
                  </div>
                  <h3 className="font-normal mt-6 text-2xl leading-[155%] text-[#111e4c]">
                    <strong>No failures</strong>
                  </h3>
                  <p className="mt-3 text-[1.06rem] leading-6 leading-[155%] text-[#a8b7e7]">
                    I do not miss deadlines and often close projects ahead of
                    schedule
                  </p>
                </div>
              </div>
              <div className="max-w-[42.88rem]">
                <img
                  className="w-full rounded-3xl"
                  src="/icons/person.jpg"
                  alt="person"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-20  px-0  bg-[#111e4c] mt-28">
        <div className="flex items-center justify-between max-w-[83.13rem] py-0  px-3.5 my-0 m-auto">
          <ul className="list-none flex items-center gap-x-[3.75rem] text-[#a8b7e7] text-[1.06rem] leading-6 leading-[155%]">
            <li className="footer-item">
              <a className="inline-block text-inherit" href="#">
                {" "}
                Privacy Policy{" "}
              </a>
            </li>
            <li className="footer-item">
              <a className="inline-block text-inherit" href="#">
                {" "}
                Personal data processing policy{" "}
              </a>
            </li>
            <li className="footer-item">
              <a className="inline-block text-inherit" href="#">
                {" "}
                Public offer{" "}
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-x-[1.38rem]">
            <a
              className="text-inherit flex items-center justify-center h-10 w-10 rounded-full bg-[#009dff]"
              href="#"
            >
              <img src="/icons/social/behance.svg" alt="behance" />
            </a>
            <a
              className="text-inherit flex items-center justify-center h-10 w-10 rounded-full bg-[#009dff]"
              href="#"
            >
              <img src="/icons/social/dribbble.svg" alt="dribbble" />
            </a>
            <a
              className="text-inherit flex items-center justify-center h-10 w-10 rounded-full bg-[#009dff]"
              href="#"
            >
              <img src="/icons/social/instagram.svg" alt="instagram" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
