function AddSection({ onAddClick }) {
  return (
    <div className="p-2.5 text-center w-[80vw] flex justify-end-safe">
      <button
        onClick={onAddClick}
        className=" cursor-pointer bg-button border-2 border-button  hover:bg-[#0047AB] text-white rounded-lg px-4 py-1"
      >
        Add New Post
      </button>
    </div>
  );
}

export default AddSection;
