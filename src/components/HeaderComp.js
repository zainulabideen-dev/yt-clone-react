import React, { useEffect, useState } from "react";
import { BsSearch, BsFillMicFill } from "react-icons/bs";
import { RiVideoAddFill } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { signInWithPopup } from "firebase/auth";
import { auth, db, provider } from "../config/firebase";
import { ref, set } from "firebase/database";

export const HeaderComp = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    _getCurrentUSer();
  }, []);

  async function _getCurrentUSer() {
    let user = auth.currentUser;
    if (user) {
      setUser(user);
    }
  }

  async function _signIn() {
    provider.setCustomParameters({
      prompt: "select_account ",
    });
    signInWithPopup(auth, provider)
      .then((data) => {
        set(ref(db, `users/${data?.user?.uid}/`), {
          uid: data?.user?.uid,
          email: data?.user?.email,
          photoURL: data?.user?.photoURL,
        })
          .then(() => {
            setUser(data?.user);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="h-[10%] w-full bg-[#0F0F0F] flex items-center">
      <div className="grid grid-cols-5 w-full">
        <div className="col-span-4 px-5">
          <div className="flex w-full">
            <div className="flex w-full items-center py-2 px-5 border border-gray-400 rounded-full">
              <input
                placeholder="Search"
                className="text-gray-300 w-[90%] bg-[#0F0F0F] outline-none border-none"
              />
              <div className="w-[10%] flex justify-end">
                <BsSearch color="white" />
              </div>
            </div>
            <div className="flex items-center ml-2 bg-gray-700 w-[40px] h-[40px] rounded-full justify-center">
              <BsFillMicFill color="white" size={20} />
            </div>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-end px-5">
          <RiVideoAddFill color="white" size={20} />
          <IoMdNotificationsOutline color="white" size={20} className="ml-5" />
          {user === undefined ? (
            <div
              onClick={() => _signIn()}
              className="flex items-center border border-blue-400 py-2 px-4 ml-5 rounded-full cursor-pointer"
            >
              <FaCircleUser className="text-blue-400" />
              <p className="text-blue-400 text-sm ml-2">Sign In</p>
            </div>
          ) : (
            <div>
              <img
                src={user?.photoURL}
                alt="..."
                className="w-[30px] h-[30px] rounded-full ml-5"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
