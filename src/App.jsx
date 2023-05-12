import { MdExpandMore } from 'react-icons/md';
import { Tooltip } from 'react-tippy';
import { useState } from 'react';
import 'react-tippy/dist/tippy.css';

export default function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg overflow-y-auto">
      <ul className="flex flex-col items-start justify-start space-y-1 mt-8">
        <li className="w-full rounded-md transition-colors duration-200 ease-in-out">
          <a
            href="#"
            onClick={() => handleTabClick(1)}
            className={`block px-4 py-2 text-gray-800 hover:text-blue-500 ${
              activeTab === 1 ? 'font-bold text-blue-500' : ''
            }`}
          >
            Overview
          </a>
        </li>
        <li className="relative w-full rounded-md transition-colors duration-200 ease-in-out">
          <Tooltip arrow position="right" trigger="mouseenter">
            <button
              className={`flex items-center justify-between w-full px-4 py-2 text-gray-800 hover:text-blue-500 ${
                isDropdownOpen
                  ? 'transition duration-200 ease-in-out transform'
                  : ''
              }`}
              onClick={handleDropdownClick}
            >
              <span>Menu</span>
              <MdExpandMore className="icon ml-2" />
            </button>
          </Tooltip>

          {isDropdownOpen && (
            <div className="absolute z-10 w-full">
              <ul
                className={`dropdown-menu w-full bg-white shadow rounded-md py-2 ${
                  isDropdownOpen ? 'open' : ''
                }`}
              >
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-800">
                    Option 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-800">
                    Option 2
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-800">
                    Option 3
                  </a>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
