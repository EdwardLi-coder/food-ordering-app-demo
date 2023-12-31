import Image from "next/image";
import Right from "@/components/icons/Right";

export default function Hero() {
  return (
    <section className="grid grid-cols-2">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything is better with a Pizza
        </h1>
        <p className="my-4 text-gray-500">
          Pizza is the missing piece that makes every day complete,A simple yet
          delicious joy in life
        </p>

        <div className="flex gap-4">
          <button className="bg-primary uppercase flex items-center gap-2 text-white px-8 py-2 rounded-full text-sm">
            Order Now
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>

      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
}
