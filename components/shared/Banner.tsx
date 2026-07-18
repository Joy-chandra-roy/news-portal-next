import Image from "next/image";
import { Button } from "../ui/button";
import bannerImg from"@/assests/banner.jpg"



const Banner = () => {
  return (
    <div className="bg-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 lg:px-8 py-8">
        {/* images */}
        <div>
            {/* <Image src={bannerImg} alt="banner image"/> */}
            <Image src="https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww" width={600} height={480} alt="dynamic image"/>
        </div>

        {/* content */}
        <div className="space-y-4 flex flex-col">
            <h4 className="text-gray-500 font-medium text-sm">Technology</h4>
            <h2 className="text-4xl font-bold ">Empowering Businesses with Modern Technology</h2>
            <p>We leverage cutting-edge technologies to build fast, secure, and scalable digital solutions. From modern web development to cloud integration, our technology stack ensures exceptional performance, reliability, and long-term growth for your business.<br/> <br/>Our team uses the latest frameworks, tools, and best practices to create high-quality web applications. We focus on performance, security, and user experience to deliver solutions that help businesses thrive in the digital world.</p>
            <Button variant="default">Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
