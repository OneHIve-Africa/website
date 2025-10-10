import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "@remix-run/react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "~/assets/logo.png";

interface NavItem {
  name: string;
  path: string;
  children?: { name: string; path: string }[];
}

interface ActionButton {
  name: string;
  path: string;
  variant: "link" | "outline" | "solid";
}

const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Investor", path: "/investor" },
  { name: "Beekeeper", path: "/beekeeper" },
  { name: "Partner", path: "/partner" },
  { name: "Impact", path: "/impact" },
  { name: "Contact Us", path: "/contact" },
];

const actionButtons: ActionButton[] = [
  {
    name: "Login",
    path: "https://app.onehiveafrica.com/login",
    variant: "link",
  },
  {
    name: "Get Started",
    path: "https://app.onehiveafrica.com/register",
    variant: "solid",
  },
  // { name: "Invest", path: "/investor", variant: "solid" },
];

const NavigationHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [menuAnimating, setMenuAnimating] = useState<boolean>(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const openMenu = (): void => {
    if (menuButtonRef.current) {
      const rect = menuButtonRef.current.getBoundingClientRect();
      setMenuPosition({
        x: rect.x + rect.width / 2,
        y: rect.y + rect.height / 2,
      });
    }
    setMenuAnimating(true);
    setIsMenuOpen(true);
  };

  const closeMenu = (): void => {
    setMenuAnimating(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setTimeout(() => {
        setMenuAnimating(false);
      }, 300);
    }, 10);
  };

  const toggleMenu = (): void => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const getButtonStyles = (variant: ActionButton["variant"]): string => {
    const baseStyles =
      "text-sm font-bold font-['Plus Jakarta Sans'] transition-colors";

    switch (variant) {
      case "link":
        return `${baseStyles} text-[#1b9d3c] font-medium hover:text-[#167d30]`;
      case "outline":
        return `${baseStyles} px-4 py-2 sm:px-6 text-[#1b9d3c] border border-[#1b9d3c] rounded-md hover:bg-[#1b9d3c] hover:text-white`;
      case "solid":
        return `${baseStyles} px-4 py-2 sm:px-6 text-white bg-[#1b9d3c] rounded-md hover:bg-[#167d30]`;
      default:
        return baseStyles;
    }
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsSticky(scrollTop > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on window resize if mobile menu is open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`w-full px-4 py-3 shadow-sm z-50 fixed top-0 transition-all duration-300 ${
          isSticky ? "bg-white" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl lg:px-8">
          {/* Header Content */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="w-[118px] h-[34px] relative z-20">
              <img src={logo} alt="Logo" className="w-full h-full" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              className="p-2 lg:hidden text-black hover:text-[#1b9d3c] transition-colors relative z-50"
              aria-label="Toggle menu"
              type="button"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-8 px-5">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium leading-relaxed tracking-wider font-['Plus Jakarta Sans'] transition-colors ${
                      isActive
                        ? "text-[#1b9d3c]"
                        : "text-black hover:text-[#1b9d3c]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-4">
              {actionButtons.map((button) => (
                <React.Fragment key={button.name}>
                  {button.name === "Create Account" ||
                  button.name === "Login" ? (
                    <a
                      href={button.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={getButtonStyles(button.variant)}
                    >
                      {button.name}
                    </a>
                  ) : (
                    <Link
                      to={button.path}
                      className={getButtonStyles(button.variant)}
                    >
                      {button.name}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Simplified for better mobile compatibility */}
      {(isMenuOpen || menuAnimating) && (
        <div
          className={`fixed inset-0 z-40 lg:hidden ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMenuOpen ? "opacity-50" : "opacity-0"}`}
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div
            className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* Menu Content */}
            <div className="flex flex-col h-full pt-16">
              {/* Close button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={closeMenu}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Navigation Items */}
              <div className="flex-1 overflow-y-auto px-6">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `block py-3 px-4 text-lg font-medium font-['Plus Jakarta Sans'] rounded-lg transition-colors ${
                          isActive
                            ? "text-[#1b9d3c] bg-green-50"
                            : "text-gray-800 hover:text-[#1b9d3c] hover:bg-gray-50"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Mobile Action Buttons */}
              <div className="px-6 py-6 border-t border-gray-100 space-y-3">
                {actionButtons.map((button) => (
                  <div key={button.name}>
                    {button.name === "Create Account" ? (
                      <a
                        href={button.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className={`${getButtonStyles(
                          button.variant
                        )} w-full flex justify-center items-center text-base py-3`}
                      >
                        {button.name}
                      </a>
                    ) : button.name === "Login" ? (
                      <a
                        href={button.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className={`${getButtonStyles(
                          button.variant
                        )} w-full flex justify-center items-center text-base py-3`}
                      >
                        {button.name}
                      </a>
                    ) : (
                      <Link
                        to={button.path}
                        onClick={closeMenu}
                        className={`${getButtonStyles(
                          button.variant
                        )} w-full flex justify-center items-center text-base py-3`}
                      >
                        {button.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationHeader;
