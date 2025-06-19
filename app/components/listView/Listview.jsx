import React from "react";
import ListCard from "../listcards/ListCard";
import { FourSquare } from "react-loading-indicators";

function Listview({ posts, onDelete, onUpdate, loading }) {
  return (
    <div className="flex justify-center bg-background">
      <div className="flex flex-col overflow-y-auto h-[80vh] items-center  gap-4 w-full max-w-4xl min-h-[80vh]">
        {loading ? (
         <FourSquare color="#17caee" size="large" text="" textColor="" />
        ) : (
          posts.map((post) => (
            <ListCard
              key={post.id}
              post={post}
              onDelete={onDelete}
              onUpdate={() => onUpdate(post)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Listview;
