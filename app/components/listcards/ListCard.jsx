import React from "react";

function ListCard({ post,onDelete,onUpdate }) {
  return (
    <div className=" w-full max-w-4xl sm:flex-row p-4 bg-background border border-border rounded-lg shadow-sm dark:bg-subbg dark:border-border gap-1 ">
      <div className="flex-1">
        <h5 className="text-[18px] font-bold text-text dark:text-text ">
          {post.title}
        </h5>
        <p className="text-base text-text dark:text-text text-[14px]">
          {post.body}
        </p>
      </div>

      <div className="flex items-start justify-end gap-2 sm:pl-4">
        <button onClick={()=>{onUpdate(post.id)}} className=" bg-button border-2 border-button  hover:bg-[#0047AB] text-white rounded-lg px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400">
          Edit
        </button>
        <button onClick={()=>onDelete(post.id)} className=" bg-background border-2 border-subbg  hover:border-button hover:border-2  text-text rounded-lg px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ListCard;
