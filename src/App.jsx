import { useState } from 'react';
import { Transition } from '@headlessui/react';
import classNames from 'classnames';

const Sidebar = () => {
  const menuData = [
    {
      label: 'User',
      subItems: [
        {
          label: 'Profile',
          subItems: [{ label: 'Home' }, { label: 'Rent' }]
        },
        {
          label: 'Settings',
          subItems: [{ label: 'Home' }, { label: 'Rent' }]
        }
      ]
    },
    {
      label: 'Product',
      subItems: [
        {
          label: 'Name',
          subItems: [{ label: 'Home' }, { label: 'Rent' }]
        },
        {
          label: 'Brand',
          subItems: [{ label: 'Home' }, { label: 'Rent' }]
        }
      ]
    },
    {
      label: 'Game',
      subItems: [
        {
          label: 'Name',
          subItems: [{ label: 'Home' }, { label: 'Rent' }]
        },
        {
          label: 'Brand',
          subItems: [
            { label: 'Home', subItems: [{ label: 'car' }, { label: 'team' }] },
            { label: 'Rent' }
          ]
        }
      ]
    }
  ];

  const [openMenuIndex, setOpenMenuIndex] = useState({});
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menuKey) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menuKey]: !prevState[menuKey]
    }));
  };

  const renderSubMenuItems = (subItems, depth = 1) => {
    if (!subItems) return null;
    return (
      <ul>
        {subItems.map((subItem) => {
          const hasSubItems = subItem.subItems && subItem.subItems.length > 0;
          const isOpen = openMenus[subItem.label];
          const subMenuClasses = classNames({
            'pl-4': true,
            'ml-2': depth > 1
          });
          return (
            <li key={subItem.label}>
              <button
                className="flex w-full items-center text-left text-white font-semibold px-4 py-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={() => toggleMenu(subItem.label)}
              >
                {subItem.label}
              </button>
              {hasSubItems && (
                <Transition
                  show={isOpen}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className={subMenuClasses}>
                    {renderSubMenuItems(subItem.subItems, depth + 1)}
                  </div>
                </Transition>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  const renderMenuItems = () => {
    return menuData.map((menu, index) => {
      const isOpen = openMenuIndex === index;
      const toggleMenu = () => {
        setOpenMenuIndex(isOpen ? -1 : index);
      };
      return (
        <div key={menu.label}>
          <button
            className={`flex justify-between items-center w-full py-3 px-6 text-sm font-medium text-left focus:outline-none ${
              isOpen ? 'bg-gray-700' : ''
            }`}
            onClick={toggleMenu}
          >
            <span>{menu.label}</span>
            {menu.subItems && (
              <svg
                className={`h-5 w-5 transform transition-transform ${
                  isOpen ? 'rotate-90' : ''
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.292 6.292a1 1 0 0 1 1.414 0L10 8.586l2.293-2.294a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                />
              </svg>
            )}
          </button>
          <div className={`${isOpen ? 'block' : 'hidden'}`}>
            {menu.subItems && (
              <Transition
                show={isOpen}
                className={`${index > 0 ? 'border-t border-gray-700' : ''}`}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="pl-4">
                  {renderSubMenuItems(menu.subItems, 1)}
                </div>
              </Transition>
            )}
          </div>
        </div>
      );
    });
  };
  return (
    <div className="w-64 h-screen bg-gray-800 text-gray-100 flex flex-col">
      <div className="py-4 px-6 bg-gray-700">
        <span className="font-semibold text-lg">Dashboard</span>
      </div>
      <div className="flex-grow overflow-y-auto">{renderMenuItems()}</div>
    </div>
  );
};

export default Sidebar;
