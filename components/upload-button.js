const activeBtn = "text-white cursor-not-allowed font-source-sans rounded-lg";
const deactivedBtn =
  "bg-gray-400 !text-white font-source-sans cursor-not-allowed";

export default function UploadButton({ PluginSelected, ChangeHandler }) {
  return (
    <input
      type="file"
      name="file"
      accept=".csv"
      onChange={ChangeHandler}
      className={PluginSelected === true ? activeBtn : deactivedBtn}
      disabled={PluginSelected !== false ? false : true}
    />
  );
}
