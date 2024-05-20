import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ToggleButton from "./ToggleButton";
import RightEvents from "./RightEvents";
import RightCollectivables from "./RightCollectivables";

const Event = () => {
  const [actButton, setActButton] = useState("Events");
  const book_2 = useRef();
  var settingsWeb_2 = {
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    autoplay: true,
    arrows: false,
    dots: true,
  };

  const data = [
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.mOjrQ0yMjA-BSqW-Fi1cpQHaE8&pid=Api&P=0&h=180",
      title: "",
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.mOjrQ0yMjA-BSqW-Fi1cpQHaE8&pid=Api&P=0&h=180",
      title: "",
    },
    {
      img: "https://tse4.mm.bing.net/th?id=OIP.T2bkB2lkGtJoKvpFUqwscAAAAA&pid=Api&P=0&h=180",
      title: "",
    },
  ];

  const activeButtonHandler = (text) => {
    setActButton(text);
  };

  return (
    <div className=" flex w-full max-h-[950px] overflow-hidden">
      <div className=" w-[60%] flex bg-[#15181b] h-[1200px] overflow-hidden">
        <div id="backgroundTextContainer" className="absolute left-10 top-28">
          <div className="backgroundTextWrapper text-gray-200 text-opacity-20 text-9xl font-bold">
            <div>ASDR</div>
            <div className="mb-16">IX</div>
            <div>EVE</div>
            <div>NTS</div>
          </div>
        </div>
        <div>
          <div className="flex ">
            <div className="text-[#ffca5f] ml-24  text-[40px] font-bold">
              Astrix
            </div>
          </div>
          <div className="translate-x-28 mt-16 hidden sm:grid z-10 w-full overflow-hidden lg:max-w-none sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-4">
            {/* {props?.data.length > 4 && (
          <div className="z-30 absolute mt-[200px]  item-center left-[30px]  hidden  sm:flex justify-between         px-4   sm:items-center ">
            <button
              onClick={() => {
                handlePrevClick_2();
              }}
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              class="inline-block rounded-full bg-primary p-2  uppercase bg-white leading-normal  opacity-50  text-etGray shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:opacity-70 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>
        )} */}
            {data?.length > 1 ? (
              <Slider
                ref={book_2}
                {...settingsWeb_2}
                className="col-span-4  w-full  grid grid-cols-4 sm:grid-cols-3 mt-14  "
              >
                {data?.slice(0, 3).map((item, indx) => {
                  return (
                    <div
                      key={indx}
                      className="pr-5 right-0 grid grid-cols-1 hover:scale-105 transition duration-700 ease-in-out  col-span-1 rounded-lg "
                    >
                      <div
                        className={
                          "h-full sm:w-[full] w-full relative  rounded-lg border border-gray-600  overflow-hidden  hover:border-sky-500  m-2"
                        }
                      >
                        <img
                          style={{ objectFit: "cover", width: "100%" }}
                          src={item.img}
                          fill="true"
                          loading="lazy"
                          alt={item.title}
                          className="rounded-t-lg h-[500px] w-full border-b  "
                        />
                        <div className="absolute  top-2 right-2">
                          {/*  <Image
                          src="/instaIcon.webp"
                          width={30}
                          height={30}
                          alt="article image"
                          loading="lazy"
                        /> */}
                        </div>
                        {/*  <div className="p-3  w-[full]  rounded-b-lg h-[100px]">
                        {item.Title}
                      </div> */}
                      </div>
                    </div>
                  );
                })}
              </Slider>
            ) : (
              <>
                {props?.data?.slice(0, 6).map((item, indx) => {
                  return (
                    <div
                      className="px-1  grid grid-cols-1 col-span-1"
                      key={indx}
                    >
                      <a href={`/${item.SeoURL}`} className="cursor-pointer ">
                        <div
                          className={
                            "h-[320px] sm:w-[full] w-full relative border  rounded-t-lg "
                          }
                        >
                          <Image
                            style={{ objectFit: "cover", width: "100%" }}
                            src={item.img}
                            loading="lazy"
                            fill="true"
                            alt={item.AltTag}
                            className=""
                          />
                          <div className="absolute top-2 right-2">
                            <Image
                              src="/instaIcon.webp"
                              width={30}
                              height={30}
                              loading="lazy"
                              alt="article image"
                            />
                          </div>
                        </div>
                        <div className="p-3  w-[full] border rounded-b-lg h-[100px]">
                          {item.Title}
                        </div>
                      </a>
                    </div>
                  );
                })}
              </>
            )}
            <div className="mt-10">
              <ToggleButton
                activeButtonHandler={activeButtonHandler}
                actButton={actButton}
              />
            </div>
          </div>
          <div className="  mt-10 flex justify-end mr-5 ">
            <div className="bg-gray-950 text-sm  rounded-full text-white flex w-max p-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#b9a0ff] flex justify-center  w-[5%] overflow-hidden   relative ">
        <div className="top-animate text-black [writing-mode:vertical-lr] h-[2000px] absolute font-medium text-3xl tracking-wide	">
          lorem dlfsdlsdf f sdsd; ;o j;o o oo opis
          <span className="text-4xl mx-4">*</span> lorem dlfsdlsdf f sdsd; ;o
          j;o o oo opis
        </div>
      </div>
      <div className=" w-[35%] bg-[#15181b] h-[1200px]">
        {/* <p className='w-full font-bold text-[25px] text-white pl-[20px] ml-[10px]'>Explore your First Collectible</p>
<p className='w-full font-bold text-[25px] text-white pl-[20px] ml-[10px] '> Collectible</p>
<p className='w-full font-bold text-[40px] text-white pl-[20px] ml-[10px] mt-[30px]'>Meta </p>
<p className=' w-full font-bold text-[40px] text-white pl-[20px] ml-[10px]'>Live</p> */}

        {actButton === "Events" ? <RightEvents /> : <RightCollectivables />}
      </div>
    </div>
  );
};

export default Event;
