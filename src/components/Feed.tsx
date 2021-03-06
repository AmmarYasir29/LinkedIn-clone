import { Avatar } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import { useEffect, useState } from "react";
import "../styles/feed.css";
import FeedOption from "./FeedOption";
import Post from "./Post";
import { db } from "../firebase";
import firebase from "firebase";
import { selectUser } from "../store/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState<any>([]);
  const [input, setInput] = useState<string>("");
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot => {
        setPosts(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  const sendPost = (e: any) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__addPost">
        <div className="feed__input">
          <Avatar className="feed__img" alt="photo" src="" />
          <form>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="start a post"
            />
            <button
              type="submit"
              style={{ display: "none" }}
              onClick={e => sendPost(e)}
            >
              send
            </button>
          </form>
        </div>
        <div className="feed__addMidea">
          <FeedOption Icon={ImageIcon} title="Photo" color="blue" />
          <FeedOption Icon={ImageIcon} title="photo" color="blue" />
          <FeedOption Icon={ImageIcon} title="photo" color="blue" />
          <FeedOption Icon={ImageIcon} title="photo" color="blue" />
        </div>
      </div>
      <div className="feed__post">
        <FlipMove>
          {posts.map(
            ({
              id,
              data: { name, description, message, photoUrl },
            }: {
              id: number;
              data: {
                name: string;
                description: string;
                message: string;
                photoUrl: string;
              };
            }) => (
              <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
              />
            )
          )}
        </FlipMove>
      </div>
    </div>
  );
};

export default Feed;
