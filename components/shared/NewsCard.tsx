import Image from "next/image";
import Link from "next/link";
import cardImage from"@/assests/banner.jpg"
import { Button } from "../ui/button";

const NewsCard = () => {
    return (
        <div className="border p-4 shadow-md rounded-md">
            <Link href="/">
                    <Image src={cardImage} alt="card image" className="rounded mb-5 hover:scale-105 transition-all duration-300"/>
            </Link>
            <div>
                <h2 className="text-xl font-semibold">Innovative Technology for a Digital Future</h2>
                <p className="my-3">We create intuitive, visually appealing, and user-friendly interfaces that enhance user experience, improve engagement, and help your business achieve its digital goals</p>
                <Link href="/news">
                        <Button variant="default">Read More</Button>
                </Link>
            </div>
        </div>
    );
};

export default NewsCard;