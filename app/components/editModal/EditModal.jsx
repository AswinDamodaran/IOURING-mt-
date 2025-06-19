import React from "react";

function EditModal({ post, isOpen, onClose, onSave, isAddMode = false }) {
  const [formData, setFormData] = React.useState(
    post || { title: "", body: "" }
  );

  React.useEffect(() => {
    if (isAddMode) {
      setFormData({ title: "", body: "" });
    } else {
      setFormData(post || { title: "", body: "" });
    }
  }, [post, isAddMode]);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-subbg p-6 rounded-lg w-full max-w-md shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4 text-text">
          {isAddMode ? "Add New Post" : "Edit Post"}
        </h2>

        <input
          type="text"
          className="w-full p-2 mb-3 border rounded-md text-text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <textarea
          className="w-full p-2 mb-3 border rounded-md text-text"
          placeholder="Body"
          value={formData.body}
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
        />
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-800 border-2 border-subbg hover:border-button text-text rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            disabled={!formData.title || !formData.body}
            className="px-4 py-2 text-text bg-button border-2 border-subbg rounded-lg hover:border-button"
            onClick={() => onSave(formData)}
          >
            {isAddMode ? "Add" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
