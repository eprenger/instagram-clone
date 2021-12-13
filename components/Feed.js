import Posts from "./Posts";
import Stories from "./Stories";

export default function Feed() {
  return (
    <main
      className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl 
    xl:grid-cols-3 xl:max-w-6xl mx-auto"
    >
      {/* section 1*/}
      <section className="col-span-2">
        {/* stories */}
        <Stories />
        {/* posts */}
        <Posts />
      </section>

      {/* section 2 */}
      <section>
        {/* mini profile */}
        {/* suggestions */}
      </section>
    </main>
  );
}
