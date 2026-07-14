import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className="shadow-xl py-4">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* logo */}
          <Link href="/" className="text-3xl font-bold">
            Kaharole News
          </Link>
        
        {/* desktop menu */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/news" className="text-xl">News</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xl">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href="/services/breaking" className="text-md">
                    Breaking News Coverage
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/services/business" className="text-md">
                    Business & Market News
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/services/sports" className="text-md">
                    Sports News
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/services/technology" className="text-md">
                    Technology News
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/services/entertainment" className="text-md">
                    Entertainment News
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/about" className="text-xl">About</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/contact" className="text-xl">Contact</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        
        {/* switcher and login button */}
        <div className="hidden lg:flex items-center space-x-3">
                <span className="mr-2 text-xl">Dark mode</span>
                 <Switch />
                <div>
                    <Button variant="default">Button</Button>
                </div>
        </div>

        {/* mobile humber  menu */}
        <div className="lg:hidden ">
         <Button  variant="outline"><AiOutlineMenu/></Button>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
