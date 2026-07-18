import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import Image from "next/image";

export default function Home() {
  return (
  <div className="py-12">
    <Banner/>

    <div className="my-14">
      <h2 className="text-3xl font-semibold">Latest news</h2>
      <div className="py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <NewsCard/>
      </div>
    </div>
  </div>
  );
}
