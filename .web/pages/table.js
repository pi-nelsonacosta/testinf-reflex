/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { AlignJustifyIcon as LucideAlignJustifyIcon, ArrowDownAZIcon as LucideArrowDownAZIcon, ArrowDownToLineIcon as LucideArrowDownToLineIcon, ArrowDownZAIcon as LucideArrowDownZAIcon, BanIcon as LucideBanIcon, BookOpenIcon as LucideBookOpenIcon, CalendarIcon as LucideCalendarIcon, CheckIcon as LucideCheckIcon, ChevronLeftIcon as LucideChevronLeftIcon, ChevronRightIcon as LucideChevronRightIcon, ChevronsLeftIcon as LucideChevronsLeftIcon, ChevronsRightIcon as LucideChevronsRightIcon, DollarSignIcon as LucideDollarSignIcon, HomeIcon as LucideHomeIcon, LayoutDashboardIcon as LucideLayoutDashboardIcon, LoaderIcon as LucideLoaderIcon, MoonIcon as LucideMoonIcon, NotebookPenIcon as LucideNotebookPenIcon, SearchIcon as LucideSearchIcon, SettingsIcon as LucideSettingsIcon, SunIcon as LucideSunIcon, Table2Icon as LucideTable2Icon, UserIcon as LucideUserIcon, WifiOffIcon as LucideWifiOffIcon, XIcon as LucideXIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Badge as RadixThemesBadge, Box as RadixThemesBox, Button as RadixThemesButton, Code as RadixThemesCode, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Select as RadixThemesSelect, Separator as RadixThemesSeparator, Table as RadixThemesTable, Text as RadixThemesText, TextField as RadixThemesTextField, Theme as RadixThemesTheme } from "@radix-ui/themes"
import theme from "$/utils/theme.js"
import { Drawer as VaulDrawer } from "vaul"
import NextLink from "next/link"
import { DebounceInput } from "react-debounce-input"
import NextHead from "next/head"



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

export function Theme_de76548cb77c2821ba983eddab4e4d6c () {
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
  <RadixThemesHeading size={"5"}>
  {"Table"}
</RadixThemesHeading>
  <RadixThemesBox css={({ ["width"] : "100%" })}>
  <RadixThemesFlex css={({ ["width"] : "100%", ["paddingBottom"] : "1em" })} justify={"between"} gap={"3"} wrap={"wrap"}>
  <RadixThemesFlex align={"center"} justify={"end"} gap={"3"}>
  <Fragment_7ca5d032a244956811cdcb5701464ade/>
  <Select__root_9c48e86b1bb3b262760238de84154699/>
  <Debounceinput_4dbc604143ecc60c904f58935613774a/>
</RadixThemesFlex>
  <Button_7c03708ed98b4a8d49671b23f25829ec/>
</RadixThemesFlex>
  <RadixThemesTable.Root css={({ ["width"] : "100%" })} size={"3"} variant={"surface"}>
  <RadixThemesTable.Header>
  <RadixThemesTable.Row>
  <RadixThemesTable.ColumnHeaderCell>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"2"}>
  <LucideUserIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>
  <RadixThemesText as={"p"}>
  {"Name"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"2"}>
  <LucideDollarSignIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>
  <RadixThemesText as={"p"}>
  {"Payment"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"2"}>
  <LucideCalendarIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>
  <RadixThemesText as={"p"}>
  {"Date"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"2"}>
  <LucideNotebookPenIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>
  <RadixThemesText as={"p"}>
  {"Status"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesTable.ColumnHeaderCell>
</RadixThemesTable.Row>
</RadixThemesTable.Header>
  <Table__body_87a9b6edd81376e4ad1249b150f7ad39/>
</RadixThemesTable.Root>
  <Fragment>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["marginTop"] : "1em", ["width"] : "100%" })} direction={"row"} justify={"end"} gap={"5"}>
  <Text_c1d1900d2e9323eea229522ee351ab4c/>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} justify={"end"} gap={"2"}>
  <Iconbutton_95b724405310adbd84e9669d82a21de9/>
  <Iconbutton_cd77e9f0c2b8f87d9c69f0c62c69bc44/>
  <Iconbutton_d0787dca0fbcd2b7ab873aac4c744941/>
  <Iconbutton_ac0a1bf9094efd5a97a7e32d90383c58/>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesTheme>
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

export function Errorboundary_323fa1b4d3c3b2eb297f1402e58ffdcb () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_error_81de1ebf543e512ddcedab4ae1d07cc1 = useCallback(((_error, _info) => ((addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  }))))), [addEvents, Event])


  return (
    <ErrorBoundary FallbackComponent={Fallback} onError={on_error_81de1ebf543e512ddcedab4ae1d07cc1}>
  <Fragment>
  <Div_64093a13086094dda35345330da0660b/>
  <Toaster_9d6e054b03c6e5d1bea1c0a5576b4e6d/>
</Fragment>
  <Theme_de76548cb77c2821ba983eddab4e4d6c/>
  <NextHead>
  <title>
  {"Table"}
</title>
  <meta content={"favicon.ico"} property={"og:image"}/>
  <meta content={"width=device-width, shrink-to-fit=no, initial-scale=1"} name={"viewport"}/>
</NextHead>
</ErrorBoundary>
  )
}

export function Table__body_87a9b6edd81376e4ad1249b150f7ad39 () {
  const reflex___state____state__reflex_chat_example___backend___table_state____table_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___backend___table_state____table_state)



  return (
    <RadixThemesTable.Body>
  <>{reflex___state____state__reflex_chat_example___backend___table_state____table_state.get_current_page.map((item, index) => (
  <RadixThemesTable.Row align={"center"} css={({ ["&:hover"] : ({ ["background"] : (((index % 2) === 0) ? "var(--gray-3)" : "var(--accent-3)") }), ["background"] : (((index % 2) === 0) ? "var(--gray-1)" : "var(--accent-2)") })} key={index}>
  <RadixThemesTable.RowHeaderCell>
  {item["name"]}
</RadixThemesTable.RowHeaderCell>
  <RadixThemesTable.Cell>
  {("$"+item["payment"])}
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  {item["date"]}
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(item["status"])) {
                case JSON.stringify("Completed"):
                return <RadixThemesBadge color={"green"} radius={"large"} size={"2"} variant={"surface"}>
  <LucideCheckIcon css={({ ["color"] : "var(--current-color)" })} size={16}/>
  {"Completed"}
</RadixThemesBadge>;
                break;
                case JSON.stringify("Pending"):
                return <RadixThemesBadge color={"yellow"} radius={"large"} size={"2"} variant={"surface"}>
  <LucideLoaderIcon css={({ ["color"] : "var(--current-color)" })} size={16}/>
  {"Pending"}
</RadixThemesBadge>;
                break;
                case JSON.stringify("Canceled"):
                return <RadixThemesBadge color={"red"} radius={"large"} size={"2"} variant={"surface"}>
  <LucideBanIcon css={({ ["color"] : "var(--current-color)" })} size={16}/>
  {"Canceled"}
</RadixThemesBadge>;
                break;
            default:
                return <RadixThemesBadge color={"yellow"} radius={"large"} size={"2"} variant={"surface"}>
  <LucideLoaderIcon css={({ ["color"] : "var(--current-color)" })} size={16}/>
  {"Pending"}
</RadixThemesBadge>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
))}</>
</RadixThemesTable.Body>
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

export function Select__root_9c48e86b1bb3b262760238de84154699 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_0da0249e09ae02982e81b09799067c6e = useCallback(((_ev_0) => ((addEvents([(Event("reflex___state____state.reflex_chat_example___backend___table_state____table_state.set_sort_value", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  }))))), [addEvents, Event])


  return (
    <RadixThemesSelect.Root onValueChange={on_change_0da0249e09ae02982e81b09799067c6e} size={"3"}>
  <RadixThemesSelect.Trigger placeholder={"Sort By: Name"}/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  {""}
  <RadixThemesSelect.Item value={"name"}>
  {"name"}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={"payment"}>
  {"payment"}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={"date"}>
  {"date"}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={"status"}>
  {"status"}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
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

export function Iconbutton_d0787dca0fbcd2b7ab873aac4c744941 () {
  const reflex___state____state__reflex_chat_example___backend___table_state____table_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___backend___table_state____table_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_bdf9540b62281830d89eccdd43ea0147 = useCallback(((...args) => ((addEvents([(Event("reflex___state____state.reflex_chat_example___backend___table_state____table_state.next_page", ({  }), ({  })))], args, ({  }))))), [addEvents, Event])


  return (
    <RadixThemesIconButton color={((reflex___state____state__reflex_chat_example___backend___table_state____table_state.page_number === reflex___state____state__reflex_chat_example___backend___table_state____table_state.total_pages) ? "gray" : "accent")} css={({ ["padding"] : "6px", ["opacity"] : ((reflex___state____state__reflex_chat_example___backend___table_state____table_state.page_number === reflex___state____state__reflex_chat_example___backend___table_state____table_state.total_pages) ? 0.6 : 1) })} onClick={on_click_bdf9540b62281830d89eccdd43ea0147} variant={"soft"}>
  <LucideChevronRightIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>
</RadixThemesIconButton>
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

export function Textfield__slot_248282130a38664a8b81d3bddbd3ec37 () {
  const reflex___state____state__reflex_chat_example___backend___table_state____table_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___backend___table_state____table_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_3e5fd3d048abe87373c001cc460524d7 = useCallback(((...args) => ((addEvents([(Event("reflex___state____state.reflex_chat_example___backend___table_state____table_state.setvar", ({ ["var_name"] : "search_value", ["value"] : "" }), ({  })))], args, ({  }))))), [addEvents, Event])


  return (
    <RadixThemesTextField.Slot css={({ ["justify"] : "end", ["cursor"] : "pointer", ["display"] : (isTrue(reflex___state____state__reflex_chat_example___backend___table_state____table_state.search_value) ? "flex" : "none") })} onClick={on_click_3e5fd3d048abe87373c001cc460524d7}>
  <LucideXIcon css={({ ["color"] : "var(--current-color)" })}/>
</RadixThemesTextField.Slot>
  )
}

export function Iconbutton_95b724405310adbd84e9669d82a21de9 () {
  const reflex___state____state__reflex_chat_example___backend___table_state____table_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___backend___table_state____table_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_bf4796a7aebe570ef57dc7d2be11e091 = useCallback(((...args) => ((addEvents([(Event("reflex___state____state.reflex_chat_example___backend___table_state____table_state.first_page", ({  }), ({  })))], args, ({  }))))), [addEvents, Event])


  return (
    <RadixThemesIconButton color={((reflex___state____state__reflex_chat_example___backend___table_state____table_state.page_number === 1) ? "gray" : "accent")} css={({ ["padding"] : "6px", ["opacity"] : ((reflex___state____state__reflex_chat_example___backend___table_state____table_state.page_number === 1) ? 0.6 : 1) })} onClick={on_click_bf4796a7aebe570ef57dc7d2be11e091} variant={"soft"}>
  <LucideChevronsLeftIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>
</RadixThemesIconButton>
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

export function Code_83b740262d7b57373d0fe941e5f53522 () {
  const reflex___state____state__reflex_chat_example___backend___table_state____table_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___backend___table_state____table_state)



  return (
    <RadixThemesCode>
  {reflex___state____state__reflex_chat_example___backend___table_state____table_state.page_number}
</RadixThemesCode>
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

export function Iconbutton_ac0a1bf9094efd5a97a7e32d90383c58 () {
  const reflex___state____state__reflex_chat_example___backend___table_state____table_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___backend___table_state____table_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_ccacdaf2edced0a54aaa396c87376532 = useCallback(((...args) => ((addEvents([(Event("reflex___state____state.reflex_chat_example___backend___table_state____table_state.last_page", ({  }), ({  })))], args, ({  }))))), [addEvents, Event])


  return (
    <RadixThemesIconButton color={((reflex___state____state__reflex_chat_example___backend___table_state____table_state.page_number === reflex___state____state__reflex_chat_example___backend___table_state____table_state.total_pages) ? "gray" : "accent")} css={({ ["padding"] : "6px", ["opacity"] : ((reflex___state____state__reflex_chat_example___backend___table_state____table_state.page_number === reflex___state____state__reflex_chat_example___backend___table_state____table_state.total_pages) ? 0.6 : 1) })} onClick={on_click_ccacdaf2edced0a54aaa396c87376532} variant={"soft"}>
  <LucideChevronsRightIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>
</RadixThemesIconButton>
  )
}

export function Text_c1d1900d2e9323eea229522ee351ab4c () {
  const reflex___state____state__reflex_chat_example___backend___table_state____table_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___backend___table_state____table_state)



  return (
    <RadixThemesText as={"p"} css={({ ["justify"] : "end" })}>
  {"Page "}
  <Code_83b740262d7b57373d0fe941e5f53522/>
  {(" of "+reflex___state____state__reflex_chat_example___backend___table_state____table_state.total_pages)}
</RadixThemesText>
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

export function Debounceinput_4dbc604143ecc60c904f58935613774a () {
  const reflex___state____state__reflex_chat_example___backend___table_state____table_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___backend___table_state____table_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_5dfd8251c51a054bedfcbe7287ba8de4 = useCallback(((_e) => ((addEvents([(Event("reflex___state____state.reflex_chat_example___backend___table_state____table_state.set_search_value", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  }))))), [addEvents, Event])


  return (
    <DebounceInput color={"gray"} css={({ ["@media screen and (min-width: 0)"] : ({ ["maxWidth"] : "150px" }), ["@media screen and (min-width: 30em)"] : ({ ["maxWidth"] : "150px" }), ["@media screen and (min-width: 48em)"] : ({ ["maxWidth"] : "200px" }), ["@media screen and (min-width: 62em)"] : ({ ["maxWidth"] : "250px" }), ["width"] : "100%" })} debounceTimeout={300} element={RadixThemesTextField.Root} onChange={on_change_5dfd8251c51a054bedfcbe7287ba8de4} placeholder={"Search here..."} size={"3"} value={reflex___state____state__reflex_chat_example___backend___table_state____table_state.search_value} variant={"surface"}>
  <RadixThemesTextField.Slot>
  <LucideSearchIcon css={({ ["color"] : "var(--current-color)" })}/>
</RadixThemesTextField.Slot>
  <Textfield__slot_248282130a38664a8b81d3bddbd3ec37/>
</DebounceInput>
  )
}

export function Button_7c03708ed98b4a8d49671b23f25829ec () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_db87c9dda8be5b0f7fada89cc6635d76 = useCallback(((...args) => ((addEvents([(Event("_download", ({ ["url"] : "/items.csv", ["filename"] : "items.csv" }), ({  })))], args, ({  }))))), [addEvents, Event])


  return (
    <RadixThemesButton css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "flex" }) })} onClick={on_click_db87c9dda8be5b0f7fada89cc6635d76} size={"3"} variant={"surface"}>
  <LucideArrowDownToLineIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>
  {"Export"}
</RadixThemesButton>
  )
}

export function Iconbutton_cd77e9f0c2b8f87d9c69f0c62c69bc44 () {
  const reflex___state____state__reflex_chat_example___backend___table_state____table_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___backend___table_state____table_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_2093a54b87ad4e702500809829594539 = useCallback(((...args) => ((addEvents([(Event("reflex___state____state.reflex_chat_example___backend___table_state____table_state.prev_page", ({  }), ({  })))], args, ({  }))))), [addEvents, Event])


  return (
    <RadixThemesIconButton color={((reflex___state____state__reflex_chat_example___backend___table_state____table_state.page_number === 1) ? "gray" : "accent")} css={({ ["padding"] : "6px", ["opacity"] : ((reflex___state____state__reflex_chat_example___backend___table_state____table_state.page_number === 1) ? 0.6 : 1) })} onClick={on_click_2093a54b87ad4e702500809829594539} variant={"soft"}>
  <LucideChevronLeftIcon css={({ ["color"] : "var(--current-color)" })} size={18}/>
</RadixThemesIconButton>
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

export function Fragment_7ca5d032a244956811cdcb5701464ade () {
  const reflex___state____state__reflex_chat_example___backend___table_state____table_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___backend___table_state____table_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(reflex___state____state__reflex_chat_example___backend___table_state____table_state.sort_reverse) ? (
  <Fragment>
  <LucideArrowDownZAIcon css={({ ["strokeWidth"] : 1.5, ["cursor"] : "pointer", ["flexShrink"] : "0", ["color"] : "var(--current-color)" })} onClick={((...args) => ((addEvents([(Event("reflex___state____state.reflex_chat_example___backend___table_state____table_state.toggle_sort", ({  }), ({  })))], args, ({  })))))} size={28}/>
</Fragment>
) : (
  <Fragment>
  <LucideArrowDownAZIcon css={({ ["strokeWidth"] : 1.5, ["cursor"] : "pointer", ["flexShrink"] : "0", ["color"] : "var(--current-color)" })} onClick={((...args) => ((addEvents([(Event("reflex___state____state.reflex_chat_example___backend___table_state____table_state.toggle_sort", ({  }), ({  })))], args, ({  })))))} size={28}/>
</Fragment>
)}
</Fragment>
  )
}

export default function Component() {

  return (
    <Errorboundary_323fa1b4d3c3b2eb297f1402e58ffdcb/>
  )
}
