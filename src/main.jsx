import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css';

const items = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/'
  },
  {
    id: 'projects',
    label: 'Projects',
    children: [
      {
        id: 'all-projects',
        label: 'All Projects',
        href: '/projects'
      },
      {
        id: 'new-project',
        label: 'New Project',
        href: '/projects/new'
      },
      {
        id: 'project-templates',
        label: 'Project Templates',
        href: '/project-templates'
      }
    ]
  },
  {
    id: 'settings',
    label: 'Settings',
    children: [
      {
        id: 'profile',
        label: 'Profile',
        href: '/settings/profile'
      },
      {
        id: 'notifications',
        label: 'Notifications',
        href: '/settings/notifications'
      }
    ]
  },
  {
    id: 'reports',
    label: 'Reports',
    children: [
      {
        id: 'sales',
        label: 'Sales',
        href: '/reports/sales'
      },
      {
        id: 'expenses',
        label: 'Expenses',
        href: '/reports/expenses'
      }
    ]
  }
];


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App items={items} />
  </React.StrictMode>
);
