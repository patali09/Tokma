import { Link } from "react-router-dom";
import logo from "../images/logos.png";

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 z-10 bg-purple-600 w-full">
        <div className="navbar justify-between">
          <div className="flex">
            <Link to={"/"}>
              <img className="w-20" src={logo} />
            </Link>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              ></div>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-auto bg-white shadow"
              >
                {" "}
                {/* Changed to white */}
                <div className="card-body">
                  <div className="card w-96 bg-gray-50 text-neutral-content">
                    {" "}
                    {/* Changed to light gray */}
                    <div className="card-body">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          />
                        </div>
                      </div>
                      <p>We are using cookies for no reason.</p>
                      <div className="card-actions">
                        <button className="btn btn-primary">Accept</button>
                        <button className="btn btn-ghost">Deny</button>
                      </div>
                    </div>
                  </div>
                  <div className="card w-96 bg-gray-50 text-neutral-content">
                    {" "}
                    {/* Changed to light gray */}
                    <div className="card-body">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          />
                        </div>
                      </div>
                      <p>We are using cookies for no reason.</p>
                      <div className="card-actions">
                        <button className="btn btn-primary">Accept</button>
                        <button className="btn btn-ghost">Deny</button>
                      </div>
                    </div>
                  </div>
                  <div className="card w-96 bg-gray-50 text-neutral-content">
                    {" "}
                    {/* Changed to light gray */}
                    <div className="card-body">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          />
                        </div>
                      </div>
                      <p>We are using cookies for no reason.</p>
                      <div className="card-actions">
                        <button className="btn btn-primary">Accept</button>
                        <button className="btn btn-ghost">Deny</button>
                      </div>
                    </div>
                  </div>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block w-96">
                      View All Notifications
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end mr-8">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                {/* <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
