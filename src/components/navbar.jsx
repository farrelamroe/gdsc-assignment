import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import Logo from "../assets/gojek-logo.svg";
import logo from "../assets/goride-logo.svg";
import { Divide as Hamburger } from "hamburger-react";
import { CSSTransition } from "react-transition-group";
import "./navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [navbar1, setNavbar1] = useState(false);

  return (
    <>
      <div className=" z-[100] flex h-[70px] w-full justify-between">
        <div className="ml-14 flex flex-shrink-0 items-center py-4 px-[28px] mobile:mx-0 mobile:px-10">
          <div className="h-full w-full items-center flex justify-center">
          <a href="/google">
              <img
                onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                src={Logo}
                alt="Logo"
                className="hover:cursor-pointer items-center"
              />
          </a>
          </div>
          <ul className="mr-20 flex h-full items-center justify-center gap-1 text-xl sm:hidden lg:ml-auto xl:flex mobile:hidden">
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="w-[9rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center hover:font-bold"
            >
              Beranda
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="w-[11rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center hover:font-bold"
            >
              Gabung jadi Mitra
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="w-[9rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center hover:font-bold"
            >
              Karir
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="w-[9rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center hover:font-bold"
            >
              Perusahaan
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="w-[9rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center hover:font-bold"
            >
              Produk
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="w-[9rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center hover:font-bold"
            >
              Blog
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="w-[9rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center hover:font-bold"
            >
              Bantuan
            </li>
          </ul>
          
        </div>
        <div className=" my-auto  mobile:block xl:hidden">
            <div className="mb-0 px-10 outline-none">
              <Hamburger toggled={navbar} toggle={setNavbar} />
            </div>
        </div>
      </div>
      <div className="border-b-1 border-black border-b w-full" />
      <div className="ml-20">
      
      <ul className="flex gap-1 my-2 text-base sm:hidden  lg:ml-auto md:flex mobile:hidden">
          <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="w-auto cursor-pointer py-1 px-3 items-center flex justify-center hover:animate-fade bg-[#00AA13] hover:bg-pattern hover:bg-cover hover:bg-center border-black border rounded-full"
            >
              <img src={logo} alt="Logo" className="w-full" />
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="w-auto cursor-pointer py-1 px-3 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center hover:bg-[#00AA13] border-black border rounded-full"
            >
              GoRide Protect+
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="w-auto cursor-pointer py-1 px-3 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center hover:bg-[#00AA13] border-black border rounded-full"
            >
              GoRide Electric
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="w-auto] cursor-pointer py-1 px-3 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center hover:bg-[#00AA13] border-black border rounded-full"
            >
              Blog
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="w-auto cursor-pointer py-1 px-3 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center hover:bg-[#00AA13] border-black border rounded-full"
            >
              Daftar Driver
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="w-auto cursor-pointer py-1 px-3 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center hover:bg-[#00AA13] border-black border rounded-full"
            >
              FAQ
            </li>
          </ul>
      </div>
      <div className="bg-[#00AA13] flex flex-shrink-0 items-center py-4 mobile:mx-0 mobile:block md:hidden">
        <div className="h-full w-full items-center flex justify-between">
            <img src={logo} alt="Logo" className="w-28 sm:ml-20 py-5 mobile:ml-10" />
            <div className=" my-auto  mobile:block xl:hidden">
              <div className="mb-0 px-10 outline-none">
                <Hamburger toggled={navbar1} toggle={setNavbar1} />
              </div>
            </div>
        </div>
      </div>
      {navbar &&(
        <ul className="flex flex-col h-full items-center justify-center gap-1 text-xl xl:hidden mobile:items-center mobile:flex mobile:justify-center">
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="w-[9rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center hover:font-bold"
            >
              Beranda
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="w-[11rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center hover:font-bold"
            >
              Gabung jadi Mitra
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="w-[9rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center hover:font-bold"
            >
              Karir
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="w-[9rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center hover:font-bold"
            >
              Perusahaan
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="w-[9rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center hover:font-bold"
            >
              Produk
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="w-[9rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center hover:font-bold"
            >
              Blog
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="w-[9rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-pattern hover:bg-cover hover:bg-center hover:font-bold"
            >
              Bantuan
            </li>

          </ul>
      )}
      {navbar1 && (
        <ul className=" flex flex-col gap-1 text-base mobile:block md:hidden bg-[#00AA13] text-white mobile:mx-0 mobile:gap-1">
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="cursor-pointer pl-20 py-1 text-left hover:animate-fade hover:bg-pattern hover:bg-cover  hover:bg-[#00AA13] mobile:pl-10"
            >
              GoRide Protect+
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="cursor-pointer pl-20 py-1 text-left hover:animate-fade hover:bg-pattern hover:bg-cover  hover:bg-[#00AA13] mobile:pl-10"
            >
              GoRide Electric
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="cursor-pointer pl-20 py-1 text-left hover:animate-fade hover:bg-pattern hover:bg-cover  hover:bg-[#00AA13] mobile:pl-10"
            >
              Blog
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="cursor-pointer pl-20 py-1 text-left hover:animate-fade hover:bg-pattern hover:bg-cover  hover:bg-[#00AA13] mobile:pl-10"
            >
              Daftar Driver
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="cursor-pointer pl-20 py-1 text-left hover:animate-fade hover:bg-pattern hover:bg-cover  hover:bg-[#00AA13] mobile:pl-10"
            >
              FAQ
            </li>
          </ul>
      )}
    </>
  );
}
export default Navbar;