import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: makeRandomMessage(25),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
    <div className="w-full h-[450px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {
        //replace key index with id from fetch
        chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))
      }
    </div>
    <form className="w-full ml-2 p-2 border border-black " onSubmit={(e) => {
        e.preventDefault();
       // console.log("type values : ", liveMessage)

        dispatch(addMessages(
            {
                //name : generateRandomName(),
                name : "Admin User",
                message : liveMessage,
            }
        ))

        setLiveMessage("");
    }}>
        <input className="w-80 px-2" type="text" value={liveMessage} onChange={(e) => {
            setLiveMessage(e.target.value);
        }} />
        <button className="px-2 mx-2 bg-green-100">Send</button>
    </form>
    </>
  );
};

export default LiveChat;
