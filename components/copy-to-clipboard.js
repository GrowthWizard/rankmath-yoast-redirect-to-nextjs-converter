
/*
* Thanks to: https://learnjsx.com/category/4/posts/nextjs-copy-clipboard
*/

export const CopyToClipboard = ({ content }) => {
    return (
        <div className="bg-rosa text-white max-w-[190px] py-3 px-7 mb-7 border border-gray-300 self-end transition-colors hover:bg-rose-900 ease-linear" onClick={() => navigator.clipboard.writeText(content)}>Copy to Clipboard</div>
    )
   }