import React, { useEffect, useState } from "react";
import { SideNavComp } from "../../components/SideNavComp";
import { HeaderComp } from "../../components/HeaderComp";
import { video_list } from "../../constants";
import manImage from "../../assets/man.png";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { auth, db } from "../../config/firebase";
import { onValue, ref, set } from "firebase/database";

export const VideoPage = () => {
  const [user, setUser] = useState();
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [likeList, setLikeList] = useState([]);
  const [disLikeList, setDisLikeList] = useState([]);

  const pathname = window.location.pathname;
  const videoDetail = video_list.filter(
    (item) => item.id === parseInt(pathname.split("/")[2])
  )[0];

  useEffect(() => {
    _getCurrentUSer();
    _getComments();
    _getLikesDislike("likes");
    _getLikesDislike("DiskLikes");
  }, []);

  async function _getCurrentUSer() {
    let user = auth.currentUser;
    if (user) {
      setUser(user);
    }
  }

  async function _likeDislikeVideo(root) {
    set(ref(db, `${root}/${videoDetail.id}/${user?.uid}/`), {
      like: true,
    })
      .then(() => {
        _getLikesDislike(root);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function _getLikesDislike(root) {
    const dbRef = ref(db, `${root}/${videoDetail.id}/`);
    let list = [];
    onValue(
      dbRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          if (childSnapshot.exists) {
            list.push(childSnapshot.key);
            if (root === "likes") {
              setLikeList(list);
            } else {
              setDisLikeList(list);
            }
          }
        });
      },
      {
        onlyOnce: true,
      }
    );
  }

  async function _submitComment() {
    if (comment === "") {
      alert("Please write some comment");
      return;
    }
    set(ref(db, `comments/${videoDetail.id}/${commentList.length}/`), {
      comment: comment,
      name: user.displayName,
      photoURL: user.photoURL,
    })
      .then(() => {
        alert("Comment Submitted");
        setComment("");
        _getComments();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function _getComments() {
    const dbRef = ref(db, `comments/${videoDetail.id}/`);
    let list = [];

    onValue(
      dbRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          if (childSnapshot.exists) {
            let com = childSnapshot.val();
            list.push({
              uid: childSnapshot.key,
              comment: com.comment,
              name: com.name,
              photoURL: com.photoURL,
            });
            // childSnapshot.forEach((item) => {
            //   let com = item.val();
            //   console.log(item);
            //   list.push({
            //     uid: item.key,
            //     comment: com.comment,
            //     name: com.name,
            //     photoURL: com.photoURL,
            //   });
            // });
            setCommentList(list);
          } else {
            setCommentList([]);
          }
        });
      },
      {
        onlyOnce: true,
      }
    );
  }

  return (
    <div className="w-screen h-screen flex">
      <SideNavComp />
      <div className="w-[80%] h-screen">
        <HeaderComp />
        <div className="h-[90%] w-full bg-[#0F0F0F] py-5 overflow-auto">
          <div className="w-full">
            <video
              className="w-full h-[400px] object-cover"
              src={videoDetail.link}
              controls
            />
            <p className="text-white font-medium text-lg">{videoDetail.name}</p>
            <div className="grid grid-cols-2 py-2">
              <div className="flex">
                <img
                  src={manImage}
                  alt="..."
                  className="w-[40px] h-[40px] rounded-full"
                />
                <div className="ml-5">
                  <p className="text-white font-medium">
                    {videoDetail.channel}
                  </p>
                  <p className="text-gray-400 text-sm">{`${videoDetail.subs}`}</p>
                </div>
                <div className="ml-10">
                  <p className="px-5 py-3 bg-white text-black rounded-full text-sm">
                    Subscribe
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex items-center bg-gray-800 px-5 py-3 rounded-full">
                  <AiOutlineLike
                    size={20}
                    className={`${
                      likeList.includes(user?.uid)
                        ? "text-green-600"
                        : "text-white"
                    } cursor-pointer`}
                    onClick={() => _likeDislikeVideo("likes")}
                  />
                  <div className="bg-white w-[1px] h-[20px] mx-5" />
                  <BiDislike
                    size={20}
                    className={`${
                      disLikeList.includes(user?.uid)
                        ? "text-green-600"
                        : "text-white"
                    } cursor-pointer`}
                    onClick={() => _likeDislikeVideo("DiskLikes")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-700 p-2 rounded-md mt-3 mr-10">
            <p className="text-white font-medium">{`${videoDetail.views} ${videoDetail.time}`}</p>
            <p className="text-white font-medium text-sm mt-2">{`${videoDetail.desc}`}</p>
          </div>
          <div>
            <p className="text-white font-medium mt-5 text-lg">{`${commentList.length} Comments`}</p>
            <div className="flex mt-5 w-full">
              <img
                src={manImage}
                alt="..."
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="flex items-center ml-5 w-full mr-10">
                <input
                  placeholder="comment"
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                  className="border-b-white border-b-[1px] w-full outline-none bg-[#0F0F0F] text-white"
                />
              </div>
            </div>
            <div className="flex justify-end mr-10">
              <p
                onClick={() => _submitComment()}
                className="text-black bg-blue-400 px-5 py-2 rounded-full cursor-pointer"
              >
                Comment
              </p>
            </div>
          </div>
          <div className="mt-5">
            {commentList.map((item, _index) => {
              return (
                <div key={_index} className="flex mb-3">
                  <img
                    src={item?.photoURL}
                    alt="..."
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-white">{item?.name}</p>
                    <p className="text-white">{item?.comment}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
