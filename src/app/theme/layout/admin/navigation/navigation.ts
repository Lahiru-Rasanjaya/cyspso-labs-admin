import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'dashboards',
    title: 'Dashboards',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/employee-management',
        icon: 'feather icon-home',
        classes: 'nav-item'
      }
    ]
  },
  {
    id: 'superAdmin',
    title: 'Super Admin',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'featureAccess',
        title: 'Feature Access',
        type: 'item',
        url: '/employee-management',
        icon: 'feather icon-home',
      },
      {
        id: 'roleManagement',
        title: 'Role Management',
        type: 'item',
        url: '/employee-management',
        icon: 'feather icon-home',
      }
    ]
  },
  {
    id: 'hr',
    title: 'HR',
    type: 'group',
    icon: 'icon-ui',
    children: [
      {
        id: 'employee-management',
        title: 'Employee Management',
        type: 'collapse',
        url: '/employee-management',
        icon: 'feather icon-inbox',
        
        children: [
          {
            id: 'attendance',
            title: 'Attendance',
            type: 'item',
            url: '/attendance'
          },
          {
            id: 'Leave',
            title: 'Leave Management',
            type: 'item',
            url: '/leave'
          },
          {
            id: 'breadcrumb-pagination',
            title: 'AFK Management',
            type: 'item',
            url: '/afk-Management'
          },
          {
            id: 'collapse',
            title: 'Agreement Generator',
            type: 'item',
            url: '/agreement-generator'
          },
          {
            id: 'collapse',
            title: 'Resignation Portal',
            type: 'item',
            url: '/resignation-Portal'
          }
        ]
        
      }
    ]
  },
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
