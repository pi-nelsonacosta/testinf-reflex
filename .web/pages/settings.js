/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { AlignJustifyIcon as LucideAlignJustifyIcon, BlendIcon as LucideBlendIcon, BookOpenIcon as LucideBookOpenIcon, CheckIcon as LucideCheckIcon, HomeIcon as LucideHomeIcon, LayoutDashboardIcon as LucideLayoutDashboardIcon, MoonIcon as LucideMoonIcon, PaletteIcon as LucidePaletteIcon, RadiusIcon as LucideRadiusIcon, RulerIcon as LucideRulerIcon, SettingsIcon as LucideSettingsIcon, SunIcon as LucideSunIcon, Table2Icon as LucideTable2Icon, UserIcon as LucideUserIcon, WifiOffIcon as LucideWifiOffIcon, XIcon as LucideXIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Box as RadixThemesBox, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Select as RadixThemesSelect, Separator as RadixThemesSeparator, Text as RadixThemesText, Theme as RadixThemesTheme, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import theme from "$/utils/theme.js"
import { Drawer as VaulDrawer } from "vaul"
import NextLink from "next/link"
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

export function Theme_270dde07eab31ee7743beb86c1cfd18c () {
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
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"7"}>
  <RadixThemesHeading size={"5"}>
  {"Settings"}
</RadixThemesHeading>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"4"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>
  <LucidePaletteIcon css={({ ["color"] : "var(--accent-10)" })}/>
  <RadixThemesHeading size={"6"}>
  {"Primary color"}
</RadixThemesHeading>
</RadixThemesFlex>
  <Flex_34f9be5af08962cc264c16246f915026/>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"4"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>
  <LucideBlendIcon css={({ ["color"] : "var(--gray-11)" })}/>
  <RadixThemesHeading size={"6"}>
  {"Secondary color"}
</RadixThemesHeading>
</RadixThemesFlex>
  <Flex_ddc0851c20ad53ae5a15ab1cef3bd34b/>
</RadixThemesFlex>
  <Fragment>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>
  <LucideRadiusIcon css={({ ["color"] : "var(--current-color)" })}/>
  <RadixThemesHeading size={"6"}>
  {"Radius"}
</RadixThemesHeading>
</RadixThemesFlex>
  <Select__root_224de9eb901c9539cef667b7685b8e0e/>
</RadixThemesFlex>
</Fragment>
  <Fragment>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>
  <LucideRulerIcon css={({ ["color"] : "var(--current-color)" })}/>
  <RadixThemesHeading size={"6"}>
  {"Scaling"}
</RadixThemesHeading>
</RadixThemesFlex>
  <Select__root_8cdebc99a5a24b2e6a1afbdcad248dbf/>
</RadixThemesFlex>
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesTheme>
  )
}

export function Select__root_224de9eb901c9539cef667b7685b8e0e () {
  const reflex___state____state__reflex_chat_example___templates___template____theme_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___templates___template____theme_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_7da9697fa29a6dd9ad0e78b7c1e1bfac = useCallback(((_ev_0) => ((addEvents([(Event("reflex___state____state.reflex_chat_example___templates___template____theme_state.set_radius", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  }))))), [addEvents, Event])


  return (
    <RadixThemesSelect.Root onValueChange={on_change_7da9697fa29a6dd9ad0e78b7c1e1bfac} size={"3"} value={reflex___state____state__reflex_chat_example___templates___template____theme_state.radius}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  {""}
  <RadixThemesSelect.Item value={"none"}>
  {"none"}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={"small"}>
  {"small"}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={"medium"}>
  {"medium"}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={"large"}>
  {"large"}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={"full"}>
  {"full"}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
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

export function Select__root_8cdebc99a5a24b2e6a1afbdcad248dbf () {
  const reflex___state____state__reflex_chat_example___templates___template____theme_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___templates___template____theme_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_28cfac5c2d906eb2c34d93edf241957b = useCallback(((_ev_0) => ((addEvents([(Event("reflex___state____state.reflex_chat_example___templates___template____theme_state.set_scaling", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  }))))), [addEvents, Event])


  return (
    <RadixThemesSelect.Root onValueChange={on_change_28cfac5c2d906eb2c34d93edf241957b} size={"3"} value={reflex___state____state__reflex_chat_example___templates___template____theme_state.scaling}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  {""}
  <RadixThemesSelect.Item value={"90%"}>
  {"90%"}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={"95%"}>
  {"95%"}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={"100%"}>
  {"100%"}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={"105%"}>
  {"105%"}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={"110%"}>
  {"110%"}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  )
}

export function Errorboundary_a7e3adf3e82c42af096662fe0ffe05f5 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_error_81de1ebf543e512ddcedab4ae1d07cc1 = useCallback(((_error, _info) => ((addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  }))))), [addEvents, Event])


  return (
    <ErrorBoundary FallbackComponent={Fallback} onError={on_error_81de1ebf543e512ddcedab4ae1d07cc1}>
  <Fragment>
  <Div_64093a13086094dda35345330da0660b/>
  <Toaster_9d6e054b03c6e5d1bea1c0a5576b4e6d/>
</Fragment>
  <Theme_270dde07eab31ee7743beb86c1cfd18c/>
  <NextHead>
  <title>
  {"Settings"}
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
            

export function Flex_34f9be5af08962cc264c16246f915026 () {
  const reflex___state____state__reflex_chat_example___views___color_picker____color_picker_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___views___color_picker____color_picker_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const reflex___state____state__reflex_chat_example___templates___template____theme_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___templates___template____theme_state)



  return (
    <RadixThemesFlex css={({ ["width"] : "100%", ["maxWidth"] : "40rem", ["@media screen and (min-width: 0)"] : ({ ["gap"] : "15px" }), ["@media screen and (min-width: 30em)"] : ({ ["gap"] : "15px" }), ["@media screen and (min-width: 48em)"] : ({ ["gap"] : "20px" }) })} wrap={"wrap"}>
  <>{Object.entries(reflex___state____state__reflex_chat_example___views___color_picker____color_picker_state.primary_color_options).map((color, index_4251211521a5ae7e) => (
  <RadixThemesTooltip content={color.at(0)} key={index_4251211521a5ae7e}>
  <RadixThemesBox onClick={((...args) => ((addEvents([(Event("reflex___state____state.reflex_chat_example___templates___template____theme_state.setvar", ({ ["var_name"] : "accent_color", ["value"] : color.at(0).toLowerCase() }), ({  })))], args, ({  })))))}>
  <Fragment>
  {isTrue((color.at(0).toLowerCase() === reflex___state____state__reflex_chat_example___templates___template____theme_state.accent_color.toLowerCase())) ? (
  <Fragment>
  <RadixThemesBox css={({ ["borderRadius"] : "max(var(--radius-3), var(--radius-full))", ["boxShadow"] : "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", ["cursor"] : "pointer", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "transform 0.15s ease-in-out", ["&:active"] : ({ ["transform"] : "translateY(2px) scale(0.95)" }), ["background"] : color.at(1), ["@media screen and (min-width: 0)"] : ({ ["height"] : "2.25rem", ["width"] : "2.25rem" }), ["@media screen and (min-width: 30em)"] : ({ ["height"] : "2.25rem", ["width"] : "2.25rem" }), ["@media screen and (min-width: 48em)"] : ({ ["height"] : "2.5rem", ["width"] : "2.5rem" }), ["border"] : "2px solid  var(--gray-12)" })}>
  <LucideCheckIcon css={({ ["color"] : "var(--gray-12)" })}/>
</RadixThemesBox>
</Fragment>
) : (
  <Fragment>
  <RadixThemesBox css={({ ["borderRadius"] : "max(var(--radius-3), var(--radius-full))", ["boxShadow"] : "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", ["cursor"] : "pointer", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "transform 0.15s ease-in-out", ["&:active"] : ({ ["transform"] : "translateY(2px) scale(0.95)" }), ["background"] : color.at(1), ["@media screen and (min-width: 0)"] : ({ ["height"] : "2.25rem", ["width"] : "2.25rem" }), ["@media screen and (min-width: 30em)"] : ({ ["height"] : "2.25rem", ["width"] : "2.25rem" }), ["@media screen and (min-width: 48em)"] : ({ ["height"] : "2.5rem", ["width"] : "2.5rem" }) })}/>
</Fragment>
)}
</Fragment>
</RadixThemesBox>
</RadixThemesTooltip>
))}</>
</RadixThemesFlex>
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

export function Flex_ddc0851c20ad53ae5a15ab1cef3bd34b () {
  const reflex___state____state__reflex_chat_example___views___color_picker____color_picker_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___views___color_picker____color_picker_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const reflex___state____state__reflex_chat_example___templates___template____theme_state = useContext(StateContexts.reflex___state____state__reflex_chat_example___templates___template____theme_state)



  return (
    <RadixThemesFlex css={({ ["width"] : "100%", ["maxWidth"] : "40rem", ["@media screen and (min-width: 0)"] : ({ ["gap"] : "15px" }), ["@media screen and (min-width: 30em)"] : ({ ["gap"] : "15px" }), ["@media screen and (min-width: 48em)"] : ({ ["gap"] : "20px" }) })} wrap={"wrap"}>
  <>{Object.entries(reflex___state____state__reflex_chat_example___views___color_picker____color_picker_state.secondary_color_options).map((colors, index_21fe35942d772afa) => (
  <RadixThemesTooltip content={colors.at(0)} key={index_21fe35942d772afa}>
  <RadixThemesBox onClick={((...args) => ((addEvents([(Event("reflex___state____state.reflex_chat_example___templates___template____theme_state.setvar", ({ ["var_name"] : "gray_color", ["value"] : colors.at(0).toLowerCase() }), ({  })))], args, ({  })))))}>
  <Fragment>
  {isTrue((colors.at(0).toLowerCase() === reflex___state____state__reflex_chat_example___templates___template____theme_state.gray_color.toLowerCase())) ? (
  <Fragment>
  <RadixThemesBox css={({ ["borderRadius"] : "max(var(--radius-3), var(--radius-full))", ["boxShadow"] : "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", ["cursor"] : "pointer", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "transform 0.15s ease-in-out", ["&:active"] : ({ ["transform"] : "translateY(2px) scale(0.95)" }), ["background"] : colors.at(1), ["@media screen and (min-width: 0)"] : ({ ["height"] : "2.25rem", ["width"] : "2.25rem" }), ["@media screen and (min-width: 30em)"] : ({ ["height"] : "2.25rem", ["width"] : "2.25rem" }), ["@media screen and (min-width: 48em)"] : ({ ["height"] : "2.5rem", ["width"] : "2.5rem" }), ["border"] : "2px solid  var(--gray-12)" })}>
  <LucideCheckIcon css={({ ["color"] : "var(--gray-12)" })}/>
</RadixThemesBox>
</Fragment>
) : (
  <Fragment>
  <RadixThemesBox css={({ ["borderRadius"] : "max(var(--radius-3), var(--radius-full))", ["boxShadow"] : "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", ["cursor"] : "pointer", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "transform 0.15s ease-in-out", ["&:active"] : ({ ["transform"] : "translateY(2px) scale(0.95)" }), ["background"] : colors.at(1), ["@media screen and (min-width: 0)"] : ({ ["height"] : "2.25rem", ["width"] : "2.25rem" }), ["@media screen and (min-width: 30em)"] : ({ ["height"] : "2.25rem", ["width"] : "2.25rem" }), ["@media screen and (min-width: 48em)"] : ({ ["height"] : "2.5rem", ["width"] : "2.5rem" }) })}/>
</Fragment>
)}
</Fragment>
</RadixThemesBox>
</RadixThemesTooltip>
))}</>
</RadixThemesFlex>
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
    <Errorboundary_a7e3adf3e82c42af096662fe0ffe05f5/>
  )
}
