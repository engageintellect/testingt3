import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="navbar sticky top-0 z-10 bg-neutral-900 py-2 py-10 text-lg text-white">
        <div className="mx-2 md:mx-10">
          <div className="grid grid-cols-2 items-center">
            <div className="text-md flex flex-col justify-start">
              <a href="/">
                {/* Ne<span className="text-blue-500">x</span>um */}
                Rugged Development
              </a>

              <div className="flex flex-row gap-4 py-2 text-2xl">
                <a href="">
                  <FaTwitter className="text-white" />
                </a>

                <a href="">
                  <FaFacebook className="text-white" />
                </a>

                <a href="">
                  <FaYoutube className="text-white" />
                </a>

                <a href="">
                  <FaLinkedin className="text-white" />
                </a>

                <a href="">
                  <FaInstagram className="text-white" />
                </a>
              </div>

              <div className="text-xs">
                <div>Copyright Rugged Development.</div>

                <div>All Rights Reserved.</div>
              </div>
            </div>

            <div className="flex justify-end">
              <a href="/">
                <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-blue-700 hover:scale-105 hover:bg-blue-600">
                  v0.0.1
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
