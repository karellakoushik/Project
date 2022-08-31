import React from 'react';
import {
    FaTh,  FaRegChartBar

} from 'react-icons/fa'
import {
   MdComputer, MdDomainVerification , MdSignalWifiStatusbarConnectedNoInternet4, MdLogin

} from 'react-icons/md'

export const SidebarData = [
  {
            path: "/home",
            name: 'Home',
             icon: <FaTh/>,
             cName: 'nav-text'
        },
        {
            path: '/machines',
            name: 'Machines',
            icon: <MdComputer/>,
            cName: 'nav-text'
        },
        {
            path: '/check-network-traffic',
            name: 'Check Network Traffic',
            icon: <FaRegChartBar/>,
            cName: 'nav-text'
        },
        {
            path: '/domains',
            name: 'Domains',
            icon: <MdDomainVerification/>,
            cName: 'nav-text'
        },
        {
            path: '/internet-speed',
            name: 'Internet Speed',
            icon: <MdSignalWifiStatusbarConnectedNoInternet4/>,
            cName: 'nav-text'
        },
        {
            path: '/logs',
            name: 'Logs',
            icon: <MdLogin/>,
            cName: 'nav-text'
        }
];