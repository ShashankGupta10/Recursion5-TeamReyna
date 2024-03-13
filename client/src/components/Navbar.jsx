import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(180deg,#2e2885 0%, rgba(2, 13, 65, 0.96875) 80%, rgba(2, 13, 65, 0.8) 100%)",
        }}
        className=" bg-gradient-to-r from-[#020D41] to-[#2e2885] "
      >
        <div className="flex flex-col h-35">
          <header className="px-4 lg:px-6 h-14 flex items-center">
            <a className="flex items-center justify-center" href="/">
              <img className="h-10 w-16" src="logo_white.svg" alt="" />
              <span className="sr-only text-white">WanderLust</span>
            </a>

            {localStorage.getItem("email") ? (
              <nav className="text-white ml-auto flex gap-4 sm:gap-6">
                <a
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="/"
                >
                  Home
                </a>

                <a
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="/chat"
                >
                  Chat
                </a>
                <a
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="/search"
                >
                  Flight
                </a>
                <a
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="/pricing"
                >
                  Pricing
                </a>
                <button
                  className="text-sm font-medium hover:underline underline-offset-4"
                  onClick={handleSignOut}
                >
                  Sign out
                </button>
              </nav>
            ) : (
              <nav className="text-white ml-auto flex gap-4 sm:gap-6">
                <a
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="/"
                >
                  Home
                </a>
                <a
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#"
                >
                  About
                </a>
                <a
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#"
                >
                  Locations
                </a>
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  to="/login"
                >
                  Sign In
                </Link>
              </nav>
            )}
          </header>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
