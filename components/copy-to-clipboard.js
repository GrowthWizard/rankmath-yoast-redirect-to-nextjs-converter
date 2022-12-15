/*
 * Thanks to: https://learnjsx.com/category/4/posts/nextjs-copy-clipboard
 */

import toast from "react-hot-toast";

export default function CopyToClipboard({ Content }) {
  const success = () => {
    navigator.clipboard.writeText(Content);
    toast.success("Copied to Clipboard!");
  };

  return (
    <div
      onClick={success}
      className="bg-rosa text-white max-w-[190px] py-3 px-7 mb-7 border border-gray-300 self-end transition-colors hover:bg-rose-900 ease-linear"
    >
      Copy to Clipboard
    </div>
  );
}
