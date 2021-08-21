import React from "react";
import * as IoIcons from "react-icons/io";
import * as FcIcons from "react-icons/fc";


export const SidebarData = [
  {
    title: "Time locker",
    path: "/time-locker",
    icon: <FcIcons.FcAlarmClock />,
    cName: "nav-text",
  },

  {
    title: "Farms",
    path: "/farms",
    icon: <FcIcons.FcInTransit />,
    cName: "nav-text",
  },

  {
    title: "Pools",
    path: "/pools",
    icon: <FcIcons.FcBullish />,
    cName: "nav-text",
  },

  {
    title: "Team",
    path: "/team",
    icon: <FcIcons.FcBusinessman />,
    cName: "nav-text",
  },

  {
    title: "Docs",
    path: "/documentation",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },

  {
    title: "Messages",
    path: "/messages",
    icon: <FcIcons.FcSms />,
    cName: "nav-text",
  },

  {
    title: "Support",
    path: "/support",
    icon: <FcIcons.FcCallback />,
    cName: "nav-text",
  },
];
