/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { AlignJustifyIcon as LucideAlignJustifyIcon, AreaChartIcon as LucideAreaChartIcon, BarChart3Icon as LucideBarChart3Icon, BellIcon as LucideBellIcon, BookOpenIcon as LucideBookOpenIcon, DollarSignIcon as LucideDollarSignIcon, GlobeIcon as LucideGlobeIcon, HomeIcon as LucideHomeIcon, InfoIcon as LucideInfoIcon, LayoutDashboardIcon as LucideLayoutDashboardIcon, MessageSquareTextIcon as LucideMessageSquareTextIcon, MoonIcon as LucideMoonIcon, SearchIcon as LucideSearchIcon, SettingsIcon as LucideSettingsIcon, ShoppingCartIcon as LucideShoppingCartIcon, SunIcon as LucideSunIcon, Table2Icon as LucideTable2Icon, TrendingDownIcon as LucideTrendingDownIcon, TrendingUpIcon as LucideTrendingUpIcon, UserIcon as LucideUserIcon, UserRoundSearchIcon as LucideUserRoundSearchIcon, UsersIcon as LucideUsersIcon, WifiOffIcon as LucideWifiOffIcon, XIcon as LucideXIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Badge as RadixThemesBadge, Box as RadixThemesBox, Card as RadixThemesCard, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Progress as RadixThemesProgress, SegmentedControl as RadixThemesSegmentedControl, Select as RadixThemesSelect, Separator as RadixThemesSeparator, Text as RadixThemesText, TextField as RadixThemesTextField, Theme as RadixThemesTheme, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import theme from "$/utils/theme.js"
import { Drawer as VaulDrawer } from "vaul"
import NextLink from "next/link"
import { Area as RechartsArea, Bar as RechartsBar, CartesianGrid as RechartsCartesianGrid, Legend as RechartsLegend, Pie as RechartsPie, ResponsiveContainer as RechartsResponsiveContainer, Tooltip as RechartsTooltip, XAxis as RechartsXAxis, YAxis as RechartsYAxis } from "recharts"
import dynamic from "next/dynamic"
import NextHead from "next/head"

const RechartsPieChart = dynamic(() => import('recharts').then((mod) => mod.PieChart), { ssr: false });
const RechartsBarChart = dynamic(() => import('recharts').then((mod) => mod.BarChart), { ssr: false });
const RechartsAreaChart = dynamic(() => import('recharts').then((mod) => mod.AreaChart), { ssr: false });


export function Fragment_bc3171ca4df68168d1008062b0694744 () {
  const reflex___state____state__reflex_chat_example___views___charts____stats_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___views___charts____stats_state)
  const ref_colorBlue = useRef(null); refs["ref_colorBlue"] = ref_colorBlue;
  const ref_colorGreen = useRef(null); refs["ref_colorGreen"] = ref_colorGreen;
  const ref_colorPurple = useRef(null); refs["ref_colorPurple"] = ref_colorPurple;



  return (
    <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__reflex_chat_example___views___charts____stats_state.selected_tab)) {
                case JSON.stringify("users"):
                return <Fragment>
  {isTrue(reflex___state____state__reflex_chat_example___views___charts____stats_state.area_toggle) ? (
  <Fragment>
  <RechartsResponsiveContainer height={425} minWidth={200} width={"100%"}>
  <RechartsAreaChart data={reflex___state____state__reflex_chat_example___views___charts____stats_state.users_data} height={"100%"} width={"100%"}>
  <Fragment>
  <defs>
  <linearGradient id={"colorBlue"} ref={ref_colorBlue} x1={0} x2={0} y1={0} y2={1}>
  <stop offset={"5%"} stopColor={"var(--blue-7)"} stopOpacity={0.8}/>
  <stop offset={"95%"} stopColor={"var(--blue-7)"} stopOpacity={0}/>
</linearGradient>
</defs>
</Fragment>
  <Fragment>
  <RechartsTooltip allowEscapeViewBox={({ ["x"] : false, ["y"] : false })} contentStyle={({ ["backgroundColor"] : "var(--gray-1)", ["borderRadius"] : "var(--radius-2)", ["borderWidth"] : "1px", ["borderColor"] : "var(--blue-7)", ["padding"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" })} cursor={({ ["strokeWidth"] : 1, ["fill"] : "var(--gray-3)" })} isAnimationActive={true} itemStyle={({ ["color"] : "var(--gray-12)" })} labelStyle={({ ["color"] : "var(--gray-11)" })} separator={" : "}/>
</Fragment>
  <RechartsCartesianGrid stroke={"var(--gray-7)"} strokeDasharray={"3 3"}/>
  <RechartsArea activeDot={({ ["stroke"] : "var(--accent-2)", ["fill"] : "var(--accent-10)" })} dataKey={"Users"} fill={"url(#colorBlue)"} stroke={"var(--blue-9)"} type={"monotone"}/>
  <RechartsXAxis dataKey={"Date"} scale={"auto"} stroke={"var(--gray-9)"}/>
  <RechartsYAxis stroke={"var(--gray-9)"}/>
  <RechartsLegend/>
</RechartsAreaChart>
</RechartsResponsiveContainer>
</Fragment>
) : (
  <Fragment>
  <RechartsResponsiveContainer height={425} minWidth={200} width={"100%"}>
  <RechartsBarChart data={reflex___state____state__reflex_chat_example___views___charts____stats_state.users_data} height={"100%"} width={"100%"}>
  <RechartsCartesianGrid stroke={"var(--gray-7)"} strokeDasharray={"3 3"}/>
  <Fragment>
  <RechartsTooltip allowEscapeViewBox={({ ["x"] : false, ["y"] : false })} contentStyle={({ ["backgroundColor"] : "var(--gray-1)", ["borderRadius"] : "var(--radius-2)", ["borderWidth"] : "1px", ["borderColor"] : "var(--blue-7)", ["padding"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" })} cursor={({ ["strokeWidth"] : 1, ["fill"] : "var(--gray-3)" })} isAnimationActive={true} itemStyle={({ ["color"] : "var(--gray-12)" })} labelStyle={({ ["color"] : "var(--gray-11)" })} separator={" : "}/>
</Fragment>
  <RechartsBar dataKey={"Users"} fill={"var(--blue-7)"} stroke={"var(--blue-9)"}/>
  <RechartsXAxis dataKey={"Date"} scale={"auto"} stroke={"var(--gray-9)"}/>
  <RechartsYAxis stroke={"var(--gray-9)"}/>
  <RechartsLegend/>
</RechartsBarChart>
</RechartsResponsiveContainer>
</Fragment>
)}
</Fragment>;
                break;
                case JSON.stringify("revenue"):
                return <Fragment>
  {isTrue(reflex___state____state__reflex_chat_example___views___charts____stats_state.area_toggle) ? (
  <Fragment>
  <RechartsResponsiveContainer height={425} minWidth={200} width={"100%"}>
  <RechartsAreaChart data={reflex___state____state__reflex_chat_example___views___charts____stats_state.revenue_data} height={"100%"} width={"100%"}>
  <Fragment>
  <defs>
  <linearGradient id={"colorGreen"} ref={ref_colorGreen} x1={0} x2={0} y1={0} y2={1}>
  <stop offset={"5%"} stopColor={"var(--green-7)"} stopOpacity={0.8}/>
  <stop offset={"95%"} stopColor={"var(--green-7)"} stopOpacity={0}/>
</linearGradient>
</defs>
</Fragment>
  <Fragment>
  <RechartsTooltip allowEscapeViewBox={({ ["x"] : false, ["y"] : false })} contentStyle={({ ["backgroundColor"] : "var(--gray-1)", ["borderRadius"] : "var(--radius-2)", ["borderWidth"] : "1px", ["borderColor"] : "var(--green-7)", ["padding"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" })} cursor={({ ["strokeWidth"] : 1, ["fill"] : "var(--gray-3)" })} isAnimationActive={true} itemStyle={({ ["color"] : "var(--gray-12)" })} labelStyle={({ ["color"] : "var(--gray-11)" })} separator={" : "}/>
</Fragment>
  <RechartsCartesianGrid stroke={"var(--gray-7)"} strokeDasharray={"3 3"}/>
  <RechartsArea activeDot={({ ["stroke"] : "var(--accent-2)", ["fill"] : "var(--accent-10)" })} dataKey={"Revenue"} fill={"url(#colorGreen)"} stroke={"var(--green-9)"} type={"monotone"}/>
  <RechartsXAxis dataKey={"Date"} scale={"auto"} stroke={"var(--gray-9)"}/>
  <RechartsYAxis stroke={"var(--gray-9)"}/>
  <RechartsLegend/>
</RechartsAreaChart>
</RechartsResponsiveContainer>
</Fragment>
) : (
  <Fragment>
  <RechartsResponsiveContainer height={425} minWidth={200} width={"100%"}>
  <RechartsBarChart data={reflex___state____state__reflex_chat_example___views___charts____stats_state.revenue_data} height={"100%"} width={"100%"}>
  <Fragment>
  <RechartsTooltip allowEscapeViewBox={({ ["x"] : false, ["y"] : false })} contentStyle={({ ["backgroundColor"] : "var(--gray-1)", ["borderRadius"] : "var(--radius-2)", ["borderWidth"] : "1px", ["borderColor"] : "var(--green-7)", ["padding"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" })} cursor={({ ["strokeWidth"] : 1, ["fill"] : "var(--gray-3)" })} isAnimationActive={true} itemStyle={({ ["color"] : "var(--gray-12)" })} labelStyle={({ ["color"] : "var(--gray-11)" })} separator={" : "}/>
</Fragment>
  <RechartsCartesianGrid stroke={"var(--gray-7)"} strokeDasharray={"3 3"}/>
  <RechartsBar dataKey={"Revenue"} fill={"var(--green-7)"} stroke={"var(--green-9)"}/>
  <RechartsXAxis dataKey={"Date"} scale={"auto"} stroke={"var(--gray-9)"}/>
  <RechartsYAxis stroke={"var(--gray-9)"}/>
  <RechartsLegend/>
</RechartsBarChart>
</RechartsResponsiveContainer>
</Fragment>
)}
</Fragment>;
                break;
                case JSON.stringify("orders"):
                return <Fragment>
  {isTrue(reflex___state____state__reflex_chat_example___views___charts____stats_state.area_toggle) ? (
  <Fragment>
  <RechartsResponsiveContainer height={425} minWidth={200} width={"100%"}>
  <RechartsAreaChart data={reflex___state____state__reflex_chat_example___views___charts____stats_state.orders_data} height={"100%"} width={"100%"}>
  <Fragment>
  <defs>
  <linearGradient id={"colorPurple"} ref={ref_colorPurple} x1={0} x2={0} y1={0} y2={1}>
  <stop offset={"5%"} stopColor={"var(--purple-7)"} stopOpacity={0.8}/>
  <stop offset={"95%"} stopColor={"var(--purple-7)"} stopOpacity={0}/>
</linearGradient>
</defs>
</Fragment>
  <Fragment>
  <RechartsTooltip allowEscapeViewBox={({ ["x"] : false, ["y"] : false })} contentStyle={({ ["backgroundColor"] : "var(--gray-1)", ["borderRadius"] : "var(--radius-2)", ["borderWidth"] : "1px", ["borderColor"] : "var(--purple-7)", ["padding"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" })} cursor={({ ["strokeWidth"] : 1, ["fill"] : "var(--gray-3)" })} isAnimationActive={true} itemStyle={({ ["color"] : "var(--gray-12)" })} labelStyle={({ ["color"] : "var(--gray-11)" })} separator={" : "}/>
</Fragment>
  <RechartsCartesianGrid stroke={"var(--gray-7)"} strokeDasharray={"3 3"}/>
  <RechartsArea activeDot={({ ["stroke"] : "var(--accent-2)", ["fill"] : "var(--accent-10)" })} dataKey={"Orders"} fill={"url(#colorPurple)"} stroke={"var(--purple-9)"} type={"monotone"}/>
  <RechartsXAxis dataKey={"Date"} scale={"auto"} stroke={"var(--gray-9)"}/>
  <RechartsYAxis stroke={"var(--gray-9)"}/>
  <RechartsLegend/>
</RechartsAreaChart>
</RechartsResponsiveContainer>
</Fragment>
) : (
  <Fragment>
  <RechartsResponsiveContainer height={425} minWidth={200} width={"100%"}>
  <RechartsBarChart data={reflex___state____state__reflex_chat_example___views___charts____stats_state.orders_data} height={"100%"} width={"100%"}>
  <Fragment>
  <RechartsTooltip allowEscapeViewBox={({ ["x"] : false, ["y"] : false })} contentStyle={({ ["backgroundColor"] : "var(--gray-1)", ["borderRadius"] : "var(--radius-2)", ["borderWidth"] : "1px", ["borderColor"] : "var(--purple-7)", ["padding"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" })} cursor={({ ["strokeWidth"] : 1, ["fill"] : "var(--gray-3)" })} isAnimationActive={true} itemStyle={({ ["color"] : "var(--gray-12)" })} labelStyle={({ ["color"] : "var(--gray-11)" })} separator={" : "}/>
</Fragment>
  <RechartsCartesianGrid stroke={"var(--gray-7)"} strokeDasharray={"3 3"}/>
  <RechartsBar dataKey={"Orders"} fill={"var(--purple-7)"} stroke={"var(--purple-9)"}/>
  <RechartsXAxis dataKey={"Date"} scale={"auto"} stroke={"var(--gray-9)"}/>
  <RechartsYAxis stroke={"var(--gray-9)"}/>
  <RechartsLegend/>
</RechartsBarChart>
</RechartsResponsiveContainer>
</Fragment>
)}
</Fragment>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
  )
}

export function Link_cf19e44b8d4f3d7384c91bfa011ac707 () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    <RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"}>
  <NextLink href={"/settings"} passHref={true}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["backgroundColor"] : (((reflex___state____state.router["page"]["path"] === "/settings") || (((reflex___state____state.router["page"]["path"] === "/") && "Settings") === "Overview")) ? "var(--accent-3)" : "var(--gray-3)"), ["color"] : (((reflex___state____state.router["page"]["path"] === "/settings") || (((reflex___state____state.router["page"]["path"] === "/") && "Settings") === "Overview")) ? "var(--accent-10)" : "var(--gray-11)"), ["opacity"] : "1" }), ["opacity"] : (((reflex___state____state.router["page"]["path"] === "/settings") || (((reflex___state____state.router["page"]["path"] === "/") && "Settings") === "Overview")) ? "1" : "0.95"), ["color"] : (((reflex___state____state.router["page"]["path"] === "/settings") || (((reflex___state____state.router["page"]["path"] === "/") && "Settings") === "Overview")) ? "var(--accent-10)" : "var(--gray-11)"), ["borderRadius"] : "var(--radius-2)", ["width"] : "100%", ["padding"] : "0.35em" })} direction={"row"} gap={"2"}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify("Settings")) {
                case JSON.stringify("Overview"):
                return <LucideHomeIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
                case JSON.stringify("Table"):
                return <LucideTable2Icon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
                case JSON.stringify("About"):
                return <LucideBookOpenIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
                case JSON.stringify("Profile"):
                return <LucideUserIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
                case JSON.stringify("Settings"):
                return <LucideSettingsIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
            default:
                return <LucideLayoutDashboardIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
        }
    })()
  }
</Fragment>
  <RadixThemesText as={"p"} size={"4"} weight={"regular"}>
  {"Settings"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Toaster_9d6e054b03c6e5d1bea1c0a5576b4e6d () {
  const { resolvedColorMode } = useContext(ColorModeContext)


  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast_props = ({ ["description"] : ("Check if server is reachable at "+getBackendURL(env.EVENT).href), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors]))

  return (
    <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Fragment_0348b5866f8ae26cdbd9c7c02c82ef0f () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    <Fragment>
  {isTrue((resolvedColorMode === "light")) ? (
  <Fragment>
  <LucideSunIcon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
) : (
  <Fragment>
  <LucideMoonIcon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
)}
</Fragment>
  )
}

export function Link_1c9114fb02b60f87508e8268ff00811c () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    <RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"}>
  <NextLink href={"/"} passHref={true}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["backgroundColor"] : (((reflex___state____state.router["page"]["path"] === "/") || (((reflex___state____state.router["page"]["path"] === "/") && "Overview") === "Overview")) ? "var(--accent-3)" : "var(--gray-3)"), ["color"] : (((reflex___state____state.router["page"]["path"] === "/") || (((reflex___state____state.router["page"]["path"] === "/") && "Overview") === "Overview")) ? "var(--accent-10)" : "var(--gray-11)"), ["opacity"] : "1" }), ["opacity"] : (((reflex___state____state.router["page"]["path"] === "/") || (((reflex___state____state.router["page"]["path"] === "/") && "Overview") === "Overview")) ? "1" : "0.95"), ["color"] : (((reflex___state____state.router["page"]["path"] === "/") || (((reflex___state____state.router["page"]["path"] === "/") && "Overview") === "Overview")) ? "var(--accent-10)" : "var(--gray-11)"), ["borderRadius"] : "var(--radius-2)", ["width"] : "100%", ["padding"] : "0.35em" })} direction={"row"} gap={"2"}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify("Overview")) {
                case JSON.stringify("Overview"):
                return <LucideHomeIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
                case JSON.stringify("Table"):
                return <LucideTable2Icon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
                case JSON.stringify("About"):
                return <LucideBookOpenIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
                case JSON.stringify("Profile"):
                return <LucideUserIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
                case JSON.stringify("Settings"):
                return <LucideSettingsIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
            default:
                return <LucideLayoutDashboardIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
        }
    })()
  }
</Fragment>
  <RadixThemesText as={"p"} size={"4"} weight={"regular"}>
  {"Overview"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Fragment_7ff09aedea293e7e07ff9b3e41321845 () {
  const reflex___state____state__reflex_chat_example___views___charts____stats_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___views___charts____stats_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(reflex___state____state__reflex_chat_example___views___charts____stats_state.area_toggle) ? (
  <Fragment>
  <RadixThemesIconButton css={({ ["padding"] : "6px", ["cursor"] : "pointer" })} onClick={((...args) => ((addEvents([(Event("reflex___state____state.reflex_chat_example___views___charts____stats_state.toggle_areachart", ({  }), ({  })))], args, ({  })))))} size={"2"} variant={"surface"}>
  <LucideAreaChartIcon css={({ ["color"] : "var(--current-color)" })} size={24}/>
</RadixThemesIconButton>
</Fragment>
) : (
  <Fragment>
  <RadixThemesIconButton css={({ ["padding"] : "6px", ["cursor"] : "pointer" })} onClick={((...args) => ((addEvents([(Event("reflex___state____state.reflex_chat_example___views___charts____stats_state.toggle_areachart", ({  }), ({  })))], args, ({  })))))} size={"2"} variant={"surface"}>
  <LucideBarChart3Icon css={({ ["color"] : "var(--current-color)" })} size={24}/>
</RadixThemesIconButton>
</Fragment>
)}
</Fragment>
  )
}

export function Segmentedcontrol__root_a7b02c24df81c36db0992549aaf5a214 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_a3439fadf7be5a3c2bc3f731330a831d = useCallback(((_value) => ((addEvents([(Event("reflex___state____state.reflex_chat_example___views___charts____stats_state.set_selected_tab", ({ ["value"] : _value }), ({  })))], [_value], ({  }))))), [addEvents, Event])


  return (
    <RadixThemesSegmentedControl.Root css={({ ["marginBottom"] : "1.5em" })} defaultValue={"users"} onValueChange={on_change_a3439fadf7be5a3c2bc3f731330a831d}>
  <RadixThemesSegmentedControl.Item value={"users"}>
  {"Users"}
</RadixThemesSegmentedControl.Item>
  <RadixThemesSegmentedControl.Item value={"revenue"}>
  {"Revenue"}
</RadixThemesSegmentedControl.Item>
  <RadixThemesSegmentedControl.Item value={"orders"}>
  {"Orders"}
</RadixThemesSegmentedControl.Item>
</RadixThemesSegmentedControl.Root>
  )
}

export function Link_e3ae1056b26b85f41fe2d010ad9f8f6d () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    <RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"}>
  <NextLink href={"/profile"} passHref={true}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["backgroundColor"] : (((reflex___state____state.router["page"]["path"] === "/profile") || (((reflex___state____state.router["page"]["path"] === "/") && "Profile") === "Overview")) ? "var(--accent-3)" : "var(--gray-3)"), ["color"] : (((reflex___state____state.router["page"]["path"] === "/profile") || (((reflex___state____state.router["page"]["path"] === "/") && "Profile") === "Overview")) ? "var(--accent-10)" : "var(--gray-11)"), ["opacity"] : "1" }), ["opacity"] : (((reflex___state____state.router["page"]["path"] === "/profile") || (((reflex___state____state.router["page"]["path"] === "/") && "Profile") === "Overview")) ? "1" : "0.95"), ["color"] : (((reflex___state____state.router["page"]["path"] === "/profile") || (((reflex___state____state.router["page"]["path"] === "/") && "Profile") === "Overview")) ? "var(--accent-10)" : "var(--gray-11)"), ["borderRadius"] : "var(--radius-2)", ["width"] : "100%", ["padding"] : "0.35em" })} direction={"row"} gap={"2"}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify("Profile")) {
                case JSON.stringify("Overview"):
                return <LucideHomeIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
                case JSON.stringify("Table"):
                return <LucideTable2Icon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
                case JSON.stringify("About"):
                return <LucideBookOpenIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
                case JSON.stringify("Profile"):
                return <LucideUserIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
                case JSON.stringify("Settings"):
                return <LucideSettingsIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
            default:
                return <LucideLayoutDashboardIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
        }
    })()
  }
</Fragment>
  <RadixThemesText as={"p"} size={"4"} weight={"regular"}>
  {"Profile"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_5e59239c3ef1582d4062d0c0ee691e4b () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    <RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"}>
  <NextLink href={"/table"} passHref={true}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["backgroundColor"] : (((reflex___state____state.router["page"]["path"] === "/table") || (((reflex___state____state.router["page"]["path"] === "/") && "Table") === "Overview")) ? "var(--accent-3)" : "var(--gray-3)"), ["color"] : (((reflex___state____state.router["page"]["path"] === "/table") || (((reflex___state____state.router["page"]["path"] === "/") && "Table") === "Overview")) ? "var(--accent-10)" : "var(--gray-11)"), ["opacity"] : "1" }), ["opacity"] : (((reflex___state____state.router["page"]["path"] === "/table") || (((reflex___state____state.router["page"]["path"] === "/") && "Table") === "Overview")) ? "1" : "0.95"), ["color"] : (((reflex___state____state.router["page"]["path"] === "/table") || (((reflex___state____state.router["page"]["path"] === "/") && "Table") === "Overview")) ? "var(--accent-10)" : "var(--gray-11)"), ["borderRadius"] : "var(--radius-2)", ["width"] : "100%", ["padding"] : "0.35em" })} direction={"row"} gap={"2"}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify("Table")) {
                case JSON.stringify("Overview"):
                return <LucideHomeIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
                case JSON.stringify("Table"):
                return <LucideTable2Icon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
                case JSON.stringify("About"):
                return <LucideBookOpenIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
                case JSON.stringify("Profile"):
                return <LucideUserIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
                case JSON.stringify("Settings"):
                return <LucideSettingsIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
            default:
                return <LucideLayoutDashboardIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
        }
    })()
  }
</Fragment>
  <RadixThemesText as={"p"} size={"3"} weight={"regular"}>
  {"Table"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Fragment_0bb3aeb98e343e8eb822e34450bb7f96 () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    <Fragment>
  {isTrue((resolvedColorMode === "light")) ? (
  <Fragment>
  <img css={({ ["height"] : "1em" })} src={"/reflex_black.svg"}/>
</Fragment>
) : (
  <Fragment>
  <img css={({ ["height"] : "1em" })} src={"/reflex_white.svg"}/>
</Fragment>
)}
</Fragment>
  )
}

export function Link_2ef3e39d543f58416f253f304e8e43b0 () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    <RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"}>
  <NextLink href={"/table"} passHref={true}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["backgroundColor"] : (((reflex___state____state.router["page"]["path"] === "/table") || (((reflex___state____state.router["page"]["path"] === "/") && "Table") === "Overview")) ? "var(--accent-3)" : "var(--gray-3)"), ["color"] : (((reflex___state____state.router["page"]["path"] === "/table") || (((reflex___state____state.router["page"]["path"] === "/") && "Table") === "Overview")) ? "var(--accent-10)" : "var(--gray-11)"), ["opacity"] : "1" }), ["opacity"] : (((reflex___state____state.router["page"]["path"] === "/table") || (((reflex___state____state.router["page"]["path"] === "/") && "Table") === "Overview")) ? "1" : "0.95"), ["color"] : (((reflex___state____state.router["page"]["path"] === "/table") || (((reflex___state____state.router["page"]["path"] === "/") && "Table") === "Overview")) ? "var(--accent-10)" : "var(--gray-11)"), ["borderRadius"] : "var(--radius-2)", ["width"] : "100%", ["padding"] : "0.35em" })} direction={"row"} gap={"2"}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify("Table")) {
                case JSON.stringify("Overview"):
                return <LucideHomeIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
                case JSON.stringify("Table"):
                return <LucideTable2Icon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
                case JSON.stringify("About"):
                return <LucideBookOpenIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
                case JSON.stringify("Profile"):
                return <LucideUserIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
                case JSON.stringify("Settings"):
                return <LucideSettingsIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
            default:
                return <LucideLayoutDashboardIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
        }
    })()
  }
</Fragment>
  <RadixThemesText as={"p"} size={"4"} weight={"regular"}>
  {"Table"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Errorboundary_1934e06dd0ce14dc2a8416c28fd0eb6d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_error_81de1ebf543e512ddcedab4ae1d07cc1 = useCallback(((_error, _info) => ((addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  }))))), [addEvents, Event])


  return (
    <ErrorBoundary FallbackComponent={Fallback} onError={on_error_81de1ebf543e512ddcedab4ae1d07cc1}>
  <Fragment>
  <Div_64093a13086094dda35345330da0660b/>
  <Toaster_9d6e054b03c6e5d1bea1c0a5576b4e6d/>
</Fragment>
  <Theme_ba8f1d8e0f9a3e33aaadc94774175006/>
  <NextHead>
  <title>
  {"Overview"}
</title>
  <meta content={"favicon.ico"} property={"og:image"}/>
  <meta content={"width=device-width, shrink-to-fit=no, initial-scale=1"} name={"viewport"}/>
</NextHead>
</ErrorBoundary>
  )
}

export function Fragment_c736c297686d874be237f5c49d20f679 () {
  const reflex___state____state__reflex_chat_example___views___charts____stats_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___views___charts____stats_state)



  return (
    <Fragment>
  {isTrue((reflex___state____state__reflex_chat_example___views___charts____stats_state.timeframe === "Yearly")) ? (
  <Fragment>
  <RechartsResponsiveContainer height={300} minWidth={200} width={"100%"}>
  <RechartsPieChart height={"100%"} width={"100%"}>
  <RechartsPie cx={"50%"} cy={"50%"} data={reflex___state____state__reflex_chat_example___views___charts____stats_state.yearly_device_data} dataKey={"value"} fill={"var(--accent-3)"} innerRadius={"70"} label={true} nameKey={"name"} outerRadius={"100"} paddingAngle={1} stroke={"var(--accent-9)"}/>
  <RechartsLegend/>
</RechartsPieChart>
</RechartsResponsiveContainer>
</Fragment>
) : (
  <Fragment>
  <RechartsResponsiveContainer height={300} minWidth={200} width={"100%"}>
  <RechartsPieChart height={"100%"} width={"100%"}>
  <RechartsPie cx={"50%"} cy={"50%"} data={reflex___state____state__reflex_chat_example___views___charts____stats_state.device_data} dataKey={"value"} fill={"var(--accent-3)"} innerRadius={"70"} label={true} nameKey={"name"} outerRadius={"100"} paddingAngle={1} stroke={"var(--accent-9)"}/>
  <RechartsLegend/>
</RechartsPieChart>
</RechartsResponsiveContainer>
</Fragment>
)}
</Fragment>
  )
}

export function Theme_ba8f1d8e0f9a3e33aaadc94774175006 () {
  const reflex___state____state__reflex_chat_example___templates___template____theme_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___templates___template____theme_state)



  return (
    <RadixThemesTheme accentColor={reflex___state____state__reflex_chat_example___templates___template____theme_state.accent_color} css={{...theme.styles.global[':root'], ...theme.styles.global.body}} grayColor={reflex___state____state__reflex_chat_example___templates___template____theme_state.gray_color} hasBackground={true} radius={reflex___state____state__reflex_chat_example___templates___template____theme_state.radius} scaling={reflex___state____state__reflex_chat_example___templates___template____theme_state.scaling}>
  <RadixThemesFlex css={({ ["@media screen and (min-width: 0)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 30em)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 48em)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 62em)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 80em)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 96em)"] : ({ ["flexDirection"] : "row" }), ["width"] : "100%", ["margin"] : "auto", ["position"] : "relative" })}>
  <nav css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 80em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 96em)"] : ({ ["display"] : "none" }), ["position"] : "sticky", ["backgroundColor"] : "var(--gray-1)", ["top"] : "0px", ["zIndex"] : "5", ["borderBottom"] : "1px solid var(--gray-5)" })}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%", ["paddingTop"] : "1.25em", ["paddingBottom"] : "1.25em", ["@media screen and (min-width: 0)"] : ({ ["paddingInlineStart"] : "1em", ["paddingInlineEnd"] : "1em" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingInlineStart"] : "1em", ["paddingInlineEnd"] : "1em" }), ["@media screen and (min-width: 48em)"] : ({ ["paddingInlineStart"] : "2em", ["paddingInlineEnd"] : "2em" }) })} direction={"row"} gap={"3"}>
  <Fragment_0bb3aeb98e343e8eb822e34450bb7f96/>
  <RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
  <VaulDrawer.Root direction={"right"}>
  <VaulDrawer.Trigger asChild={true}>
  <LucideAlignJustifyIcon css={({ ["color"] : "var(--current-color)" })}/>
</VaulDrawer.Trigger>
  <VaulDrawer.Overlay css={({ ["position"] : "fixed", ["left"] : "0", ["right"] : "0", ["bottom"] : "0", ["top"] : "0", ["z_index"] : 50, ["background"] : "rgba(0, 0, 0, 0.5)", ["zIndex"] : "5" })}/>
  <VaulDrawer.Portal css={({ ["width"] : "100%" })}>
  <RadixThemesTheme css={{...theme.styles.global[':root'], ...theme.styles.global.body}}>
  <VaulDrawer.Content css={({ ["left"] : "auto", ["right"] : "0", ["bottom"] : "0", ["top"] : "auto", ["position"] : "fixed", ["z_index"] : 50, ["display"] : "flex", ["height"] : "100%", ["width"] : "20em", ["padding"] : "1em", ["background"] : "var(--gray-1)" })}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"4"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"end"} gap={"3"}>
  <RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
  <VaulDrawer.Close asChild={true}>
  <LucideXIcon css={({ ["color"] : "var(--current-color)" })}/>
</VaulDrawer.Close>
</RadixThemesFlex>
  <RadixThemesSeparator size={"4"}/>
  <Link_1c9114fb02b60f87508e8268ff00811c/>
  <Link_2ef3e39d543f58416f253f304e8e43b0/>
  <Link_00e0c80adf6c01d1912eaa21c4e69dff/>
  <Link_e3ae1056b26b85f41fe2d010ad9f8f6d/>
  <Link_cf19e44b8d4f3d7384c91bfa011ac707/>
  <RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%", ["padding"] : "0.35em" })} direction={"row"} justify={"start"} gap={"3"}>
  <RadixThemesLink asChild={true} color={"gray"} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"}>
  <NextLink href={"https://reflex.dev/docs/getting-started/introduction/"} passHref={true}>
  <RadixThemesText as={"p"} size={"3"}>
  {"Docs"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} color={"gray"} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"}>
  <NextLink href={"https://reflex.dev/blog/"} passHref={true}>
  <RadixThemesText as={"p"} size={"3"}>
  {"Blog"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
  <Iconbutton_93fbfa4621cd9a96f49fdf414adddf4c/>
</RadixThemesFlex>
</RadixThemesFlex>
</VaulDrawer.Content>
</RadixThemesTheme>
</VaulDrawer.Portal>
</VaulDrawer.Root>
</RadixThemesFlex>
</nav>
  <RadixThemesFlex css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 80em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 96em)"] : ({ ["display"] : "flex" }), ["maxWidth"] : "32em", ["width"] : "auto", ["height"] : "100%", ["position"] : "sticky", ["top"] : "0px", ["left"] : "0px", ["flex"] : "1", ["background"] : "var(--gray-2)" })} justify={"end"}>
  <RadixThemesFlex align={"end"} className={"rx-Stack"} css={({ ["width"] : "16em", ["height"] : "100dvh", ["padding"] : "1em" })} direction={"column"} justify={"end"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%", ["padding"] : "0.35em", ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>
  <Fragment_57fbcbb6285bc41363c27207f1e1395d/>
  <RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"1"}>
  <Link_1b1ece4bbcaa5bb828b90219e6f7ef1c/>
  <Link_5e59239c3ef1582d4062d0c0ee691e4b/>
  <Link_c12c900ceb5ba02efe36dacdfe489fc5/>
  <Link_e0ef70882d6ffea68158faa2da807d2a/>
  <Link_fe5f28a79ef810da9241ec073e288189/>
</RadixThemesFlex>
  <RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%", ["padding"] : "0.35em" })} direction={"row"} justify={"start"} gap={"3"}>
  <RadixThemesLink asChild={true} color={"gray"} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"}>
  <NextLink href={"https://reflex.dev/docs/getting-started/introduction/"} passHref={true}>
  <RadixThemesText as={"p"} size={"3"}>
  {"Docs"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} color={"gray"} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"}>
  <NextLink href={"https://reflex.dev/blog/"} passHref={true}>
  <RadixThemesText as={"p"} size={"3"}>
  {"Blog"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
  <Iconbutton_93fbfa4621cd9a96f49fdf414adddf4c/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={({ ["width"] : "100%", ["@media screen and (min-width: 0)"] : ({ ["paddingTop"] : "1em", ["paddingInlineStart"] : "auto", ["paddingInlineEnd"] : "auto", ["maxWidth"] : "100%" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingTop"] : "1em", ["paddingInlineStart"] : "auto", ["paddingInlineEnd"] : "auto", ["maxWidth"] : "100%" }), ["@media screen and (min-width: 48em)"] : ({ ["paddingTop"] : "2em", ["paddingInlineStart"] : "2em", ["paddingInlineEnd"] : "2em", ["maxWidth"] : "100%" }), ["@media screen and (min-width: 62em)"] : ({ ["maxWidth"] : "100%" }), ["@media screen and (min-width: 80em)"] : ({ ["maxWidth"] : "100%" }), ["@media screen and (min-width: 96em)"] : ({ ["maxWidth"] : "1480px" }) })}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["padding"] : "1em", ["marginBottom"] : "2em", ["minHeight"] : "90vh" })} direction={"column"} gap={"3"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"8"}>
  <Heading_b124123bfe1940ed879e0b7c8a083e93/>
  <RadixThemesFlex align={"center"} css={({ ["width"] : "100%" })} justify={"between"}>
  <RadixThemesTextField.Root css={({ ["--text-field-selection-color"] : "", ["--text-field-focus-color"] : "transparent", ["--text-field-border-width"] : "1px", ["backgroundClip"] : "content-box", ["backgroundColor"] : "transparent", ["boxShadow"] : "inset 0 0 0 var(--text-field-border-width) transparent", ["color"] : "", ["width"] : "100%", ["maxWidth"] : "450px" })} placeholder={"Search here..."} radius={"large"} size={"3"}>
  <RadixThemesTextField.Slot css={({ ["paddingLeft"] : "0" })}>
  <LucideSearchIcon css={({ ["color"] : "var(--current-color)" })}/>
</RadixThemesTextField.Slot>
</RadixThemesTextField.Root>
  <RadixThemesFlex css={({ ["width"] : "100%" })} justify={"end"} gap={"4"} wrap={"nowrap"}>
  <RadixThemesBox css={({ ["position"] : "relative" })}>
  <RadixThemesIconButton color={"cyan"} css={({ ["padding"] : "0.5rem" })} radius={"full"} size={"3"} variant={"soft"}>
  <LucideBellIcon css={({ ["color"] : "var(--current-color)" })} size={36}/>
</RadixThemesIconButton>
  <RadixThemesBadge color={"cyan"} css={({ ["width"] : "1.25rem", ["height"] : "1.25rem", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["position"] : "absolute", ["right"] : "-0.35rem", ["top"] : "-0.35rem" })} radius={"full"} variant={"solid"}>
  <RadixThemesText as={"p"} size={"1"}>
  {12}
</RadixThemesText>
</RadixThemesBadge>
</RadixThemesBox>
  <RadixThemesBox css={({ ["position"] : "relative" })}>
  <RadixThemesIconButton color={"plum"} css={({ ["padding"] : "0.5rem" })} radius={"full"} size={"3"} variant={"soft"}>
  <LucideMessageSquareTextIcon css={({ ["color"] : "var(--current-color)" })} size={36}/>
</RadixThemesIconButton>
  <RadixThemesBadge color={"plum"} css={({ ["width"] : "1.25rem", ["height"] : "1.25rem", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["position"] : "absolute", ["right"] : "-0.35rem", ["top"] : "-0.35rem" })} radius={"full"} variant={"solid"}>
  <RadixThemesText as={"p"} size={"1"}>
  {6}
</RadixThemesText>
</RadixThemesBadge>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesGrid css={({ ["gap"] : "1rem", ["@media screen and (min-width: 0)"] : ({ ["gridTemplateColumns"] : "1fr" }), ["@media screen and (min-width: 30em)"] : ({ ["gridTemplateColumns"] : "repeat(1, 1fr)" }), ["@media screen and (min-width: 48em)"] : ({ ["gridTemplateColumns"] : "repeat(2, 1fr)" }), ["@media screen and (min-width: 62em)"] : ({ ["gridTemplateColumns"] : "repeat(3, 1fr)" }), ["@media screen and (min-width: 80em)"] : ({ ["gridTemplateColumns"] : "repeat(3, 1fr)" }), ["width"] : "100%" })}>
  <RadixThemesCard css={({ ["width"] : "100%", ["boxShadow"] : "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" })} size={"3"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["height"] : "100%", ["width"] : "100%" })} direction={"row"} gap={"4"}>
  <RadixThemesBadge color={"blue"} css={({ ["padding"] : "0.7rem" })} radius={"full"}>
  <LucideUsersIcon css={({ ["color"] : "var(--current-color)" })} size={34}/>
</RadixThemesBadge>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["height"] : "100%", ["alignItems"] : "start", ["width"] : "100%" })} direction={"column"} gap={"1"}>
  <RadixThemesHeading size={"6"} weight={"bold"}>
  {"4,200"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} size={"4"} weight={"medium"}>
  {"Users"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"2"}>
  <LucideTrendingUpIcon css={({ ["color"] : "var(--grass-9)" })} size={24}/>
  <RadixThemesText as={"p"} css={({ ["color"] : "var(--grass-9)" })} size={"3"} weight={"medium"}>
  {"40.0%"}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesText as={"p"} css={({ ["color"] : "var(--gray-10)" })} size={"2"}>
  {"increase from last month"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesCard>
  <RadixThemesCard css={({ ["width"] : "100%", ["boxShadow"] : "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" })} size={"3"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["height"] : "100%", ["width"] : "100%" })} direction={"row"} gap={"4"}>
  <RadixThemesBadge color={"green"} css={({ ["padding"] : "0.7rem" })} radius={"full"}>
  <LucideDollarSignIcon css={({ ["color"] : "var(--current-color)" })} size={34}/>
</RadixThemesBadge>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["height"] : "100%", ["alignItems"] : "start", ["width"] : "100%" })} direction={"column"} gap={"1"}>
  <RadixThemesHeading size={"6"} weight={"bold"}>
  {"$12,000"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} size={"4"} weight={"medium"}>
  {"Revenue"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"2"}>
  <LucideTrendingDownIcon css={({ ["color"] : "var(--tomato-9)" })} size={24}/>
  <RadixThemesText as={"p"} css={({ ["color"] : "var(--tomato-9)" })} size={"3"} weight={"medium"}>
  {"-20.0%"}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesText as={"p"} css={({ ["color"] : "var(--gray-10)" })} size={"2"}>
  {"decrease from last month"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesCard>
  <RadixThemesCard css={({ ["width"] : "100%", ["boxShadow"] : "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" })} size={"3"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["height"] : "100%", ["width"] : "100%" })} direction={"row"} gap={"4"}>
  <RadixThemesBadge color={"purple"} css={({ ["padding"] : "0.7rem" })} radius={"full"}>
  <LucideShoppingCartIcon css={({ ["color"] : "var(--current-color)" })} size={34}/>
</RadixThemesBadge>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["height"] : "100%", ["alignItems"] : "start", ["width"] : "100%" })} direction={"column"} gap={"1"}>
  <RadixThemesHeading size={"6"} weight={"bold"}>
  {"300"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} size={"4"} weight={"medium"}>
  {"Orders"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"2"}>
  <LucideTrendingUpIcon css={({ ["color"] : "var(--grass-9)" })} size={24}/>
  <RadixThemesText as={"p"} css={({ ["color"] : "var(--grass-9)" })} size={"3"} weight={"medium"}>
  {"20.0%"}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesText as={"p"} css={({ ["color"] : "var(--gray-10)" })} size={"2"}>
  {"increase from last month"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesGrid>
  <RadixThemesCard css={({ ["boxShadow"] : "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", ["width"] : "100%" })} size={"3"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"between"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"4"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }) })} direction={"row"} gap={"2"}>
  <RadixThemesTooltip content={"Sep 30, 2024 - Oct 30, 2024"}>
  <LucideInfoIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>
</RadixThemesTooltip>
  <RadixThemesText as={"p"} size={"4"} weight={"medium"}>
  {"Last 30 days"}
</RadixThemesText>
</RadixThemesFlex>
  <Fragment_7ff09aedea293e7e07ff9b3e41321845/>
</RadixThemesFlex>
  <Segmentedcontrol__root_a7b02c24df81c36db0992549aaf5a214/>
</RadixThemesFlex>
  <Fragment_bc3171ca4df68168d1008062b0694744/>
</RadixThemesCard>
  <RadixThemesGrid css={({ ["gap"] : "1rem", ["@media screen and (min-width: 0)"] : ({ ["gridTemplateColumns"] : "1fr" }), ["@media screen and (min-width: 30em)"] : ({ ["gridTemplateColumns"] : "repeat(1, 1fr)" }), ["@media screen and (min-width: 48em)"] : ({ ["gridTemplateColumns"] : "repeat(2, 1fr)" }), ["@media screen and (min-width: 62em)"] : ({ ["gridTemplateColumns"] : "repeat(2, 1fr)" }), ["@media screen and (min-width: 80em)"] : ({ ["gridTemplateColumns"] : "repeat(2, 1fr)" }), ["width"] : "100%" })}>
  <RadixThemesCard css={({ ["boxShadow"] : "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", ["width"] : "100%" })} size={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"between"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"2"}>
  <LucideUserRoundSearchIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>
  <RadixThemesText as={"p"} size={"4"} weight={"medium"}>
  {"Visitors Analytics"}
</RadixThemesText>
</RadixThemesFlex>
  <Select__root_e935dda960ef0577565fcb94a761634f/>
</RadixThemesFlex>
  <Fragment_c736c297686d874be237f5c49d20f679/>
</RadixThemesCard>
  <RadixThemesCard css={({ ["boxShadow"] : "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", ["width"] : "100%" })} size={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["marginBottom"] : "2.5em" })} direction={"row"} gap={"2"}>
  <LucideGlobeIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>
  <RadixThemesText as={"p"} size={"4"} weight={"medium"}>
  {"Acquisition Overview"}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"6"}>
  <Fragment>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%", ["borderRadius"] : "10px" })} direction={"row"} justify={"between"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "10%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "10%" }), ["@media screen and (min-width: 48em)"] : ({ ["width"] : "10%" }), ["@media screen and (min-width: 62em)"] : ({ ["width"] : "10%" }), ["@media screen and (min-width: 80em)"] : ({ ["width"] : "25%" }) })} direction={"row"} gap={"3"}>
  <img css={({ ["width"] : "24px", ["height"] : "auto", ["borderRadius"] : "2px" })} decoding={"async"} loading={"lazy"} src={"https://flag.vercel.app/s/US.svg"}/>
  <RadixThemesText as={"p"} css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 80em)"] : ({ ["display"] : "flex" }) })} size={"3"} weight={"medium"}>
  {"USA"}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex css={({ ["position"] : "relative", ["width"] : "100%" })}>
  <RadixThemesText as={"p"} css={({ ["position"] : "absolute", ["top"] : "50%", ["@media screen and (min-width: 0)"] : ({ ["left"] : "90%" }), ["@media screen and (min-width: 30em)"] : ({ ["left"] : "90%" }), ["@media screen and (min-width: 48em)"] : ({ ["left"] : "90%" }), ["@media screen and (min-width: 62em)"] : ({ ["left"] : "90%" }), ["@media screen and (min-width: 80em)"] : ({ ["left"] : "95%" }), ["transform"] : "translate(-50%, -50%)" })} size={"1"}>
  {"46%"}
</RadixThemesText>
  <RadixThemesProgress color={"blue"} css={({ ["height"] : "19px", ["width"] : "100%" })} value={46}/>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
  <Fragment>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%", ["borderRadius"] : "10px" })} direction={"row"} justify={"between"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "10%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "10%" }), ["@media screen and (min-width: 48em)"] : ({ ["width"] : "10%" }), ["@media screen and (min-width: 62em)"] : ({ ["width"] : "10%" }), ["@media screen and (min-width: 80em)"] : ({ ["width"] : "25%" }) })} direction={"row"} gap={"3"}>
  <img css={({ ["width"] : "24px", ["height"] : "auto", ["borderRadius"] : "2px" })} decoding={"async"} loading={"lazy"} src={"https://flag.vercel.app/s/CA.svg"}/>
  <RadixThemesText as={"p"} css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 80em)"] : ({ ["display"] : "flex" }) })} size={"3"} weight={"medium"}>
  {"Canada"}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex css={({ ["position"] : "relative", ["width"] : "100%" })}>
  <RadixThemesText as={"p"} css={({ ["position"] : "absolute", ["top"] : "50%", ["@media screen and (min-width: 0)"] : ({ ["left"] : "90%" }), ["@media screen and (min-width: 30em)"] : ({ ["left"] : "90%" }), ["@media screen and (min-width: 48em)"] : ({ ["left"] : "90%" }), ["@media screen and (min-width: 62em)"] : ({ ["left"] : "90%" }), ["@media screen and (min-width: 80em)"] : ({ ["left"] : "95%" }), ["transform"] : "translate(-50%, -50%)" })} size={"1"}>
  {"33%"}
</RadixThemesText>
  <RadixThemesProgress color={"crimson"} css={({ ["height"] : "19px", ["width"] : "100%" })} value={33}/>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
  <Fragment>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%", ["borderRadius"] : "10px" })} direction={"row"} justify={"between"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "10%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "10%" }), ["@media screen and (min-width: 48em)"] : ({ ["width"] : "10%" }), ["@media screen and (min-width: 62em)"] : ({ ["width"] : "10%" }), ["@media screen and (min-width: 80em)"] : ({ ["width"] : "25%" }) })} direction={"row"} gap={"3"}>
  <img css={({ ["width"] : "24px", ["height"] : "auto", ["borderRadius"] : "2px" })} decoding={"async"} loading={"lazy"} src={"https://flag.vercel.app/s/FR.svg"}/>
  <RadixThemesText as={"p"} css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 80em)"] : ({ ["display"] : "flex" }) })} size={"3"} weight={"medium"}>
  {"France"}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex css={({ ["position"] : "relative", ["width"] : "100%" })}>
  <RadixThemesText as={"p"} css={({ ["position"] : "absolute", ["top"] : "50%", ["@media screen and (min-width: 0)"] : ({ ["left"] : "90%" }), ["@media screen and (min-width: 30em)"] : ({ ["left"] : "90%" }), ["@media screen and (min-width: 48em)"] : ({ ["left"] : "90%" }), ["@media screen and (min-width: 62em)"] : ({ ["left"] : "90%" }), ["@media screen and (min-width: 80em)"] : ({ ["left"] : "95%" }), ["transform"] : "translate(-50%, -50%)" })} size={"1"}>
  {"28%"}
</RadixThemesText>
  <RadixThemesProgress color={"plum"} css={({ ["height"] : "19px", ["width"] : "100%" })} value={28}/>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
  <Fragment>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%", ["borderRadius"] : "10px" })} direction={"row"} justify={"between"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "10%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "10%" }), ["@media screen and (min-width: 48em)"] : ({ ["width"] : "10%" }), ["@media screen and (min-width: 62em)"] : ({ ["width"] : "10%" }), ["@media screen and (min-width: 80em)"] : ({ ["width"] : "25%" }) })} direction={"row"} gap={"3"}>
  <img css={({ ["width"] : "24px", ["height"] : "auto", ["borderRadius"] : "2px" })} decoding={"async"} loading={"lazy"} src={"https://flag.vercel.app/s/DE.svg"}/>
  <RadixThemesText as={"p"} css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 80em)"] : ({ ["display"] : "flex" }) })} size={"3"} weight={"medium"}>
  {"Germany"}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex css={({ ["position"] : "relative", ["width"] : "100%" })}>
  <RadixThemesText as={"p"} css={({ ["position"] : "absolute", ["top"] : "50%", ["@media screen and (min-width: 0)"] : ({ ["left"] : "90%" }), ["@media screen and (min-width: 30em)"] : ({ ["left"] : "90%" }), ["@media screen and (min-width: 48em)"] : ({ ["left"] : "90%" }), ["@media screen and (min-width: 62em)"] : ({ ["left"] : "90%" }), ["@media screen and (min-width: 80em)"] : ({ ["left"] : "95%" }), ["transform"] : "translate(-50%, -50%)" })} size={"1"}>
  {"20%"}
</RadixThemesText>
  <RadixThemesProgress color={"green"} css={({ ["height"] : "19px", ["width"] : "100%" })} value={20}/>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
  <Fragment>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%", ["borderRadius"] : "10px" })} direction={"row"} justify={"between"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "10%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "10%" }), ["@media screen and (min-width: 48em)"] : ({ ["width"] : "10%" }), ["@media screen and (min-width: 62em)"] : ({ ["width"] : "10%" }), ["@media screen and (min-width: 80em)"] : ({ ["width"] : "25%" }) })} direction={"row"} gap={"3"}>
  <img css={({ ["width"] : "24px", ["height"] : "auto", ["borderRadius"] : "2px" })} decoding={"async"} loading={"lazy"} src={"https://flag.vercel.app/s/ES.svg"}/>
  <RadixThemesText as={"p"} css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 80em)"] : ({ ["display"] : "flex" }) })} size={"3"} weight={"medium"}>
  {"Spain"}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex css={({ ["position"] : "relative", ["width"] : "100%" })}>
  <RadixThemesText as={"p"} css={({ ["position"] : "absolute", ["top"] : "50%", ["@media screen and (min-width: 0)"] : ({ ["left"] : "90%" }), ["@media screen and (min-width: 30em)"] : ({ ["left"] : "90%" }), ["@media screen and (min-width: 48em)"] : ({ ["left"] : "90%" }), ["@media screen and (min-width: 62em)"] : ({ ["left"] : "90%" }), ["@media screen and (min-width: 80em)"] : ({ ["left"] : "95%" }), ["transform"] : "translate(-50%, -50%)" })} size={"1"}>
  {"15%"}
</RadixThemesText>
  <RadixThemesProgress color={"amber"} css={({ ["height"] : "19px", ["width"] : "100%" })} value={15}/>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesGrid>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesTheme>
  )
}

export function Link_fe5f28a79ef810da9241ec073e288189 () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    <RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"}>
  <NextLink href={"/settings"} passHref={true}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["backgroundColor"] : (((reflex___state____state.router["page"]["path"] === "/settings") || (((reflex___state____state.router["page"]["path"] === "/") && "Settings") === "Overview")) ? "var(--accent-3)" : "var(--gray-3)"), ["color"] : (((reflex___state____state.router["page"]["path"] === "/settings") || (((reflex___state____state.router["page"]["path"] === "/") && "Settings") === "Overview")) ? "var(--accent-10)" : "var(--gray-11)"), ["opacity"] : "1" }), ["opacity"] : (((reflex___state____state.router["page"]["path"] === "/settings") || (((reflex___state____state.router["page"]["path"] === "/") && "Settings") === "Overview")) ? "1" : "0.95"), ["color"] : (((reflex___state____state.router["page"]["path"] === "/settings") || (((reflex___state____state.router["page"]["path"] === "/") && "Settings") === "Overview")) ? "var(--accent-10)" : "var(--gray-11)"), ["borderRadius"] : "var(--radius-2)", ["width"] : "100%", ["padding"] : "0.35em" })} direction={"row"} gap={"2"}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify("Settings")) {
                case JSON.stringify("Overview"):
                return <LucideHomeIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
                case JSON.stringify("Table"):
                return <LucideTable2Icon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
                case JSON.stringify("About"):
                return <LucideBookOpenIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
                case JSON.stringify("Profile"):
                return <LucideUserIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
                case JSON.stringify("Settings"):
                return <LucideSettingsIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
            default:
                return <LucideLayoutDashboardIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
        }
    })()
  }
</Fragment>
  <RadixThemesText as={"p"} size={"3"} weight={"regular"}>
  {"Settings"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

                function Fallback({ error, resetErrorBoundary }) {
                    return (
                        <div>
  <p>
  {"Ooops...Unknown Reflex error has occured:"}
</p>
  <p css={({ ["color"] : "red" })}>
  {error.message}
</p>
  <p>
  {"Please contact the support."}
</p>
</div>
                    );
                }
            

export function Link_00e0c80adf6c01d1912eaa21c4e69dff () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    <RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"}>
  <NextLink href={"/about"} passHref={true}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["backgroundColor"] : (((reflex___state____state.router["page"]["path"] === "/about") || (((reflex___state____state.router["page"]["path"] === "/") && "About") === "Overview")) ? "var(--accent-3)" : "var(--gray-3)"), ["color"] : (((reflex___state____state.router["page"]["path"] === "/about") || (((reflex___state____state.router["page"]["path"] === "/") && "About") === "Overview")) ? "var(--accent-10)" : "var(--gray-11)"), ["opacity"] : "1" }), ["opacity"] : (((reflex___state____state.router["page"]["path"] === "/about") || (((reflex___state____state.router["page"]["path"] === "/") && "About") === "Overview")) ? "1" : "0.95"), ["color"] : (((reflex___state____state.router["page"]["path"] === "/about") || (((reflex___state____state.router["page"]["path"] === "/") && "About") === "Overview")) ? "var(--accent-10)" : "var(--gray-11)"), ["borderRadius"] : "var(--radius-2)", ["width"] : "100%", ["padding"] : "0.35em" })} direction={"row"} gap={"2"}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify("About")) {
                case JSON.stringify("Overview"):
                return <LucideHomeIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
                case JSON.stringify("Table"):
                return <LucideTable2Icon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
                case JSON.stringify("About"):
                return <LucideBookOpenIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
                case JSON.stringify("Profile"):
                return <LucideUserIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
                case JSON.stringify("Settings"):
                return <LucideSettingsIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
            default:
                return <LucideLayoutDashboardIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>;
                break;
        }
    })()
  }
</Fragment>
  <RadixThemesText as={"p"} size={"4"} weight={"regular"}>
  {"About"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_1b1ece4bbcaa5bb828b90219e6f7ef1c () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    <RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"}>
  <NextLink href={"/"} passHref={true}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["backgroundColor"] : (((reflex___state____state.router["page"]["path"] === "/") || (((reflex___state____state.router["page"]["path"] === "/") && "Overview") === "Overview")) ? "var(--accent-3)" : "var(--gray-3)"), ["color"] : (((reflex___state____state.router["page"]["path"] === "/") || (((reflex___state____state.router["page"]["path"] === "/") && "Overview") === "Overview")) ? "var(--accent-10)" : "var(--gray-11)"), ["opacity"] : "1" }), ["opacity"] : (((reflex___state____state.router["page"]["path"] === "/") || (((reflex___state____state.router["page"]["path"] === "/") && "Overview") === "Overview")) ? "1" : "0.95"), ["color"] : (((reflex___state____state.router["page"]["path"] === "/") || (((reflex___state____state.router["page"]["path"] === "/") && "Overview") === "Overview")) ? "var(--accent-10)" : "var(--gray-11)"), ["borderRadius"] : "var(--radius-2)", ["width"] : "100%", ["padding"] : "0.35em" })} direction={"row"} gap={"2"}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify("Overview")) {
                case JSON.stringify("Overview"):
                return <LucideHomeIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
                case JSON.stringify("Table"):
                return <LucideTable2Icon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
                case JSON.stringify("About"):
                return <LucideBookOpenIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
                case JSON.stringify("Profile"):
                return <LucideUserIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
                case JSON.stringify("Settings"):
                return <LucideSettingsIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
            default:
                return <LucideLayoutDashboardIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
        }
    })()
  }
</Fragment>
  <RadixThemesText as={"p"} size={"3"} weight={"regular"}>
  {"Overview"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_c12c900ceb5ba02efe36dacdfe489fc5 () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    <RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"}>
  <NextLink href={"/about"} passHref={true}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["backgroundColor"] : (((reflex___state____state.router["page"]["path"] === "/about") || (((reflex___state____state.router["page"]["path"] === "/") && "About") === "Overview")) ? "var(--accent-3)" : "var(--gray-3)"), ["color"] : (((reflex___state____state.router["page"]["path"] === "/about") || (((reflex___state____state.router["page"]["path"] === "/") && "About") === "Overview")) ? "var(--accent-10)" : "var(--gray-11)"), ["opacity"] : "1" }), ["opacity"] : (((reflex___state____state.router["page"]["path"] === "/about") || (((reflex___state____state.router["page"]["path"] === "/") && "About") === "Overview")) ? "1" : "0.95"), ["color"] : (((reflex___state____state.router["page"]["path"] === "/about") || (((reflex___state____state.router["page"]["path"] === "/") && "About") === "Overview")) ? "var(--accent-10)" : "var(--gray-11)"), ["borderRadius"] : "var(--radius-2)", ["width"] : "100%", ["padding"] : "0.35em" })} direction={"row"} gap={"2"}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify("About")) {
                case JSON.stringify("Overview"):
                return <LucideHomeIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
                case JSON.stringify("Table"):
                return <LucideTable2Icon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
                case JSON.stringify("About"):
                return <LucideBookOpenIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
                case JSON.stringify("Profile"):
                return <LucideUserIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
                case JSON.stringify("Settings"):
                return <LucideSettingsIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
            default:
                return <LucideLayoutDashboardIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
        }
    })()
  }
</Fragment>
  <RadixThemesText as={"p"} size={"3"} weight={"regular"}>
  {"About"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Iconbutton_93fbfa4621cd9a96f49fdf414adddf4c () {
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, toggleColorMode])


  return (
    <RadixThemesIconButton css={({ ["padding"] : "6px", ["opacity"] : "0.8", ["scale"] : "0.95", ["background"] : "transparent", ["color"] : "inherit", ["zIndex"] : "20", ["&:hover"] : ({ ["cursor"] : "pointer" }) })} onClick={on_click_9922dd3e837b9e087c86a2522c2c93f8}>
  <Fragment_0348b5866f8ae26cdbd9c7c02c82ef0f/>
</RadixThemesIconButton>
  )
}

export function Heading_b124123bfe1940ed879e0b7c8a083e93 () {
  const reflex___state____state__reflex_chat_example___pages___profile____profile_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___pages___profile____profile_state)



  return (
    <RadixThemesHeading size={"5"}>
  {("Welcome, "+reflex___state____state__reflex_chat_example___pages___profile____profile_state.profile["name"])}
</RadixThemesHeading>
  )
}

export function Fragment_ecc7fc8159e7de57fc1e48e5f03b41bb () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue((connectErrors.length > 0)) ? (
  <Fragment>
  <LucideWifiOffIcon css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Div_64093a13086094dda35345330da0660b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>
  <Fragment_ecc7fc8159e7de57fc1e48e5f03b41bb/>
</div>
  )
}

export function Link_e0ef70882d6ffea68158faa2da807d2a () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    <RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"}>
  <NextLink href={"/profile"} passHref={true}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["backgroundColor"] : (((reflex___state____state.router["page"]["path"] === "/profile") || (((reflex___state____state.router["page"]["path"] === "/") && "Profile") === "Overview")) ? "var(--accent-3)" : "var(--gray-3)"), ["color"] : (((reflex___state____state.router["page"]["path"] === "/profile") || (((reflex___state____state.router["page"]["path"] === "/") && "Profile") === "Overview")) ? "var(--accent-10)" : "var(--gray-11)"), ["opacity"] : "1" }), ["opacity"] : (((reflex___state____state.router["page"]["path"] === "/profile") || (((reflex___state____state.router["page"]["path"] === "/") && "Profile") === "Overview")) ? "1" : "0.95"), ["color"] : (((reflex___state____state.router["page"]["path"] === "/profile") || (((reflex___state____state.router["page"]["path"] === "/") && "Profile") === "Overview")) ? "var(--accent-10)" : "var(--gray-11)"), ["borderRadius"] : "var(--radius-2)", ["width"] : "100%", ["padding"] : "0.35em" })} direction={"row"} gap={"2"}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify("Profile")) {
                case JSON.stringify("Overview"):
                return <LucideHomeIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
                case JSON.stringify("Table"):
                return <LucideTable2Icon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
                case JSON.stringify("About"):
                return <LucideBookOpenIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
                case JSON.stringify("Profile"):
                return <LucideUserIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
                case JSON.stringify("Settings"):
                return <LucideSettingsIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
            default:
                return <LucideLayoutDashboardIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>;
                break;
        }
    })()
  }
</Fragment>
  <RadixThemesText as={"p"} size={"3"} weight={"regular"}>
  {"Profile"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Fragment_57fbcbb6285bc41363c27207f1e1395d () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    <Fragment>
  {isTrue((resolvedColorMode === "light")) ? (
  <Fragment>
  <img css={({ ["height"] : "1.5em" })} src={"/reflex_black.svg"}/>
</Fragment>
) : (
  <Fragment>
  <img css={({ ["height"] : "1.5em" })} src={"/reflex_white.svg"}/>
</Fragment>
)}
</Fragment>
  )
}

export function Select__root_e935dda960ef0577565fcb94a761634f () {
  const reflex___state____state__reflex_chat_example___views___charts____stats_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___views___charts____stats_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_0f99bb8423bc18f5211b72b1b4643c08 = useCallback(((_ev_0) => ((addEvents([(Event("reflex___state____state.reflex_chat_example___views___charts____stats_state.set_timeframe", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  }))))), [addEvents, Event])


  return (
    <RadixThemesSelect.Root defaultValue={"Monthly"} onValueChange={on_change_0f99bb8423bc18f5211b72b1b4643c08} value={reflex___state____state__reflex_chat_example___views___charts____stats_state.timeframe}>
  <RadixThemesSelect.Trigger variant={"surface"}/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  {""}
  <RadixThemesSelect.Item value={"Monthly"}>
  {"Monthly"}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={"Yearly"}>
  {"Yearly"}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  )
}

export default function Component() {

  return (
    <Errorboundary_1934e06dd0ce14dc2a8416c28fd0eb6d/>
  )
}
