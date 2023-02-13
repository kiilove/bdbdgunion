import React from "react";
import { DEFAULT_AVATAR } from "../consts";
import QrGenerator from "./QrGenerator";
import { IoLogOutOutline, IoCloseOutline } from "react-icons/io5";

const DrawMenu = ({ setOpen }) => {
  return (
    <div className="flex w-full h-full flex-col">
      <div className="flex w-full justify-end px-2 h-10">
        <button onClick={() => setOpen()} className="mr-2 mt-2">
          <span className="text-gray-500 text-xl">
            <IoCloseOutline />
          </span>
        </button>
      </div>
      <div className="flex w-full px-1">
        <div className="flex w-1/3 justify-start items-center align-middle flex-col">
          <img src={DEFAULT_AVATAR} className="rounded-full w-16 h-16" />
          <button className="bg-orange-400 rounded-md px-2 py-1 flex justify-center items-center mt-2">
            <span className="text-xs text-white">프로필설정</span>
          </button>
        </div>
        <div className="flex w-2/3 justify-start items-start align-middle flex-col">
          <div className="flex w-full justify-center items-start align-middle flex-col">
            <div className="flex w-full justify-between">
              <div className="flex w-1/2 ">
                <span className="text-base font-semibold align-text-bottom">
                  김진배 님
                </span>
              </div>
              <div className="flex w-1/2 justify-end mr-3">
                <span className="text-gray-500">로그아웃</span>
              </div>
            </div>
          </div>
          <div className="flex w-full h-full justify-start items-start align-top flex-col">
            <span className="text-base ">kiilove@naver.com</span>
          </div>
        </div>
      </div>
      <div
        className="flex w-full bg-slate-200 my-5"
        style={{ height: "1px" }}
      ></div>
      <div className="flex w-full px-5 flex-col gap-y-5">
        <div className="flex w-full h-full justify-between">
          <div className="flex w-1/2 justify-start px-3">QR인증</div>
          <div className="flex w-1/2 justify-end">
            <button
              className="border border-blue-600 rounded-md px-1 py-1 flex justify-center items-center"
              onClick={() => (window.location.href = "/qrfull")}
            >
              <span className=" text-xs text-blue-800 font-light">
                크게보기
              </span>
            </button>
          </div>
        </div>

        <div className="flex w-full justify-center items-center h-full">
          <div className="flex w-52 h-52 bg-blue-500 rounded-lg p-5 justify-center items-center">
            <QrGenerator />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawMenu;
