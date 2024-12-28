import { time } from "console"


function Footer() {
  return (
    <footer className="bg-black text-white py-10">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
      {/* About Us Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">About Us</h3>
        <p className="text-sm leading-6">
          Music School is a premier institution dedicated to teaching the art
          and science of music. We nurture talent from the ground up,
          fostering a vibrant community of musicians.
        </p>
      </div>

      {/* Quick Links Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Courses
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Follow Us Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#" className="hover:underline">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Instagram
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Us Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
        <ul className="space-y-2 text-sm">
          <li>New Delhi, India</li>
          <li>Delhi 10001</li>
          <li>
            Email:{" "}
            <a href="mailto:info@musicschool.com" className="hover:underline">
              info@musicschool.com
            </a>
          </li>
          <li>Phone: (123) 456-7890</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Hamid Raza. All rights reserved.
        </p>
      </div>
  </footer>
  )
}

export default Footer