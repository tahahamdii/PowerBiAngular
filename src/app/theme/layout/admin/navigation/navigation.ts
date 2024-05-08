import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'Controle Commercial',
        type: 'item',
        classes: 'nav-item',
        url: '/controle-commercial',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      },
      {
        id: 'default',
        title: 'Marketting',
        type: 'item',
        classes: 'nav-item',
        url: '/marketting',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      },
      {
        id: 'default',
        title: 'Logistics',
        type: 'item',
        classes: 'nav-item',
        url: '/logistics',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      },
      
      {
        id: 'default',
        title: 'Quality',
        type: 'item',
        classes: 'nav-item',
        url: '/quality',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      }
      
    ]
  },
  {
    id: 'page',
    title: 'Ask Ai ✨',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id:'default',
        title: 'Market Demand ',
        type: 'item',
        classes: 'nav-item',
        url: '/marketdemand',
        icon: 'ti ti-search'
      
      },
      {
        id:'default',
        title: 'Sales Prediction ',
        type: 'item',
        classes: 'nav-item',
        url: '/sales',
        icon: 'ti ti-stats-up'
      }
      
    ]
  },
  {
    id: 'default',
    title: 'Profile',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id:'default',
        title: 'Profile',
        type: 'item',
        classes: 'nav-item',
        url: '/profile',
        icon: 'ti ti-user',
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
