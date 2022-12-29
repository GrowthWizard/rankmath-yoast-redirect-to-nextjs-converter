export default function PluginChoice({ SetWordPressPlugin }) {
  return (
    <div className="font-source-sans flex flex-wrap flex-row gap-2 mb-7">
      <input
        onClick={SetWordPressPlugin}
        type="radio"
        id="rankmath"
        name="seoplugin"
        value="rankmath"
      />
      <label htmlFor="rankmath">RankMath</label>
      <input
        onClick={SetWordPressPlugin}
        type="radio"
        id="yoast"
        name="seoplugin"
        value="yoast"
      />
      <label htmlFor="yoast">YoastSEO</label>
    </div>
  );
}
