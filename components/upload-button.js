export default function UploadButton ({ ChangeHandler }) {
    return (
        <input
        type="file"
        name="file"
        accept=".csv"
        onChange={ChangeHandler}
        className="self-center block mt-3  mx-auto"
      />
    )
}