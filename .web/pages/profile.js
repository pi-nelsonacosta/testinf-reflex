/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue, refs } from "$/utils/state"
import { AlignJustifyIcon as LucideAlignJustifyIcon, BellIcon as LucideBellIcon, BookOpenIcon as LucideBookOpenIcon, HomeIcon as LucideHomeIcon, LayoutDashboardIcon as LucideLayoutDashboardIcon, MailIcon as LucideMailIcon, MoonIcon as LucideMoonIcon, SettingsIcon as LucideSettingsIcon, SquareUserRoundIcon as LucideSquareUserRoundIcon, SunIcon as LucideSunIcon, Table2Icon as LucideTable2Icon, UserIcon as LucideUserIcon, WifiOffIcon as LucideWifiOffIcon, XIcon as LucideXIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Button as RadixThemesButton, Checkbox as RadixThemesCheckbox, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText, TextField as RadixThemesTextField, Theme as RadixThemesTheme } from "@radix-ui/themes"
import theme from "$/utils/theme.js"
import { Drawer as VaulDrawer } from "vaul"
import NextLink from "next/link"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
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

export function Textfield__root_8346fb17ac493977b12139baab7ddd2a () {
  const reflex___state____state__reflex_chat_example___pages___profile____profile_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___pages___profile____profile_state)



  return (
    <RadixThemesTextField.Root css={({ ["width"] : "100%" })} defaultValue={reflex___state____state__reflex_chat_example___pages___profile____profile_state.profile["email"]} name={"email"} placeholder={"user@reflex.dev"} type={"email"}/>
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

export function Errorboundary_3e2228f4e18954922a57c9fc6a11b1d1 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_error_81de1ebf543e512ddcedab4ae1d07cc1 = useCallback(((_error, _info) => ((addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  }))))), [addEvents, Event])


  return (
    <ErrorBoundary FallbackComponent={Fallback} onError={on_error_81de1ebf543e512ddcedab4ae1d07cc1}>
  <Fragment>
  <Div_64093a13086094dda35345330da0660b/>
  <Toaster_9d6e054b03c6e5d1bea1c0a5576b4e6d/>
</Fragment>
  <Theme_e2327d0ce325de2fbc462789184c46ce/>
  <NextHead>
  <title>
  {"Profile"}
</title>
  <meta content={"favicon.ico"} property={"og:image"}/>
  <meta content={"width=device-width, shrink-to-fit=no, initial-scale=1"} name={"viewport"}/>
</NextHead>
</ErrorBoundary>
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

export function Theme_e2327d0ce325de2fbc462789184c46ce () {
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
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["maxWidth"] : "800px" })} direction={"column"} gap={"6"}>
  <RadixThemesFlex css={({ ["width"] : "100%", ["@media screen and (min-width: 0)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 30em)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 48em)"] : ({ ["flexDirection"] : "row" }) })} gap={"4"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>
  <LucideSquareUserRoundIcon css={({ ["color"] : "var(--current-color)" })}/>
  <RadixThemesHeading size={"5"}>
  {"Personal information"}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesText as={"p"} size={"3"}>
  {"Update your personal information."}
</RadixThemesText>
</RadixThemesFlex>
  <Root_81126c412ff1c55e95123354fff73887/>
</RadixThemesFlex>
  <RadixThemesSeparator size={"4"}/>
  <RadixThemesFlex css={({ ["width"] : "100%", ["@media screen and (min-width: 0)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 30em)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 48em)"] : ({ ["flexDirection"] : "row" }) })} justify={"between"} gap={"4"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>
  <LucideBellIcon css={({ ["color"] : "var(--current-color)" })}/>
  <RadixThemesHeading size={"5"}>
  {"Notifications"}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesText as={"p"} size={"3"}>
  {"Manage your notification settings."}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesText as={"label"} size={"3"}>
  <RadixThemesFlex gap={"2"}>
  <Checkbox_4bdb585c26a85618e681927451d83ea1/>
  {"Receive product updates"}
</RadixThemesFlex>
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesTheme>
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
            

export function Checkbox_4bdb585c26a85618e681927451d83ea1 () {
  const reflex___state____state__reflex_chat_example___pages___profile____profile_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___pages___profile____profile_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_4abb50e8a12e35c5ff83300e3b45f5b3 = useCallback(((_ev_0) => ((addEvents([(Event("reflex___state____state.reflex_chat_example___pages___profile____profile_state.toggle_notifications", ({  }), ({  })))], [_ev_0], ({  }))))), [addEvents, Event])


  return (
    <RadixThemesCheckbox checked={reflex___state____state__reflex_chat_example___pages___profile____profile_state.profile["notifications"]} onCheckedChange={on_change_4abb50e8a12e35c5ff83300e3b45f5b3} size={"3"}/>
  )
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

export function Root_81126c412ff1c55e95123354fff73887 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  
    const handleSubmit_c44010289c07a2196dd7dae34dfb7d8b = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => ((addEvents([(Event("reflex___state____state.reflex_chat_example___pages___profile____profile_state.handle_submit", ({ ["form_data"] : form_data }), ({  })))], args, ({  })))))());

        if (true) {
            $form.reset()
        }
    })
    

  return (
    <RadixFormRoot className={"Root "} css={({ ["width"] : "100%", ["maxWidth"] : "325px" })} onSubmit={handleSubmit_c44010289c07a2196dd7dae34dfb7d8b}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"5"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"1"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"2"}>
  <LucideUserIcon css={({ ["strokeWidth"] : 1.5, ["color"] : "var(--current-color)" })} size={16}/>
  <RadixThemesText as={"p"}>
  {"Name"}
</RadixThemesText>
</RadixThemesFlex>
  <Textfield__root_3a14a5f01817d5fcd40a6407b15a0dcd/>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"1"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"2"}>
  <LucideMailIcon css={({ ["strokeWidth"] : 1.5, ["color"] : "var(--current-color)" })} size={16}/>
  <RadixThemesText as={"p"}>
  {"Email"}
</RadixThemesText>
</RadixThemesFlex>
  <Textfield__root_8346fb17ac493977b12139baab7ddd2a/>
</RadixThemesFlex>
  <RadixThemesButton css={({ ["width"] : "100%" })} type={"submit"}>
  {"Update"}
</RadixThemesButton>
</RadixThemesFlex>
</RadixFormRoot>
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

export function Textfield__root_3a14a5f01817d5fcd40a6407b15a0dcd () {
  const reflex___state____state__reflex_chat_example___pages___profile____profile_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___pages___profile____profile_state)



  return (
    <RadixThemesTextField.Root css={({ ["width"] : "100%" })} defaultValue={reflex___state____state__reflex_chat_example___pages___profile____profile_state.profile["name"]} name={"name"} placeholder={"Admin"} type={"text"}/>
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

export default function Component() {

  return (
    <Errorboundary_3e2228f4e18954922a57c9fc6a11b1d1/>
  )
}
