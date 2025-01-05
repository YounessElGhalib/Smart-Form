import Message from "./Message.jsx";
import { debounce } from "lodash";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setKeyName } from "../stores/createAccountSlice";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";

export default function ContentConversation({ sendInputMsg = "" }) {
  const dispatch = useDispatch();
  const fakeForm = useSelector((state) => state.createAccount.fakeForm);

  const [idxMsg, setIdxMsg] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnded, setIsEnded] = useState(true);
  const [currentMsg, setCurrentMsg] = useState(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (sendInputMsg) nextMes(sendInputMsg);
  }, [sendInputMsg]);

  useEffect(() => {
    setCurrentMessage();
  }, [isEnded, idxMsg, isLoading]);

  useEffect(() => {
    if (fakeForm.length) {
      idxMsg === 0 ? setIsEnded(false) : null;
      setListMessage();
    }
  }, [fakeForm]);

  function setListMessage() {
    setList(
      fakeForm
        .filter((item) => item.val)
        .map((msg) => (
          <div key={msg.id}>
            {["message", "val"].map((type, index) => {
              if (msg[type])
                return (
                  <Message
                    key={`${msg.id} + ${index}`}
                    message={msg[type]}
                    isRight={type === "message"}
                  />
                );
            })}
          </div>
        ))
    );
  }

  function setCurrentMessage() {
    setCurrentMsg(
      isEnded ? null : (
        <div key={fakeForm[idxMsg].id}>
          <Box className="p-0 relative">
            <Fade className="absolute" in={isLoading}>
              <span>Taping...</span>
            </Fade>
            <Fade className="absolute" in={!isLoading}>
              <span>
                <Message
                  key={fakeForm[idxMsg].id}
                  message={fakeForm[idxMsg].message}
                />
              </span>
            </Fade>
          </Box>
        </div>
      )
    );
  }

  function nextMes(value) {
    if (isEnded) return;
    setIsLoading(true);
    dispatch(setKeyName({ idx: idxMsg, val: value }));
    idxMsg < fakeForm.length - 1 ? setIdxMsg((i) => i + 1) : setIsEnded(true);
    debounce(() => {
      setIsLoading(false);
    }, 1500)();
  }

  return (
    <div className="w-full h-[440px] p-4 overflow-y-auto">
      {list}
      {currentMsg}
    </div>
  );
}
