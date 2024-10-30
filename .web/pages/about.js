/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { AlignJustifyIcon as LucideAlignJustifyIcon, BookOpenIcon as LucideBookOpenIcon, HomeIcon as LucideHomeIcon, LayoutDashboardIcon as LucideLayoutDashboardIcon, MoonIcon as LucideMoonIcon, SettingsIcon as LucideSettingsIcon, SunIcon as LucideSunIcon, Table2Icon as LucideTable2Icon, UserIcon as LucideUserIcon, WifiOffIcon as LucideWifiOffIcon, XIcon as LucideXIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Code as RadixThemesCode, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText, Theme as RadixThemesTheme } from "@radix-ui/themes"
import theme from "$/utils/theme.js"
import { Drawer as VaulDrawer } from "vaul"
import NextLink from "next/link"
import ReactMarkdown from "react-markdown"
import "katex/dist/katex.min.css"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import remarkUnwrapImages from "remark-unwrap-images"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark"
import oneLight from "react-syntax-highlighter/dist/cjs/styles/prism/one-light"
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python"
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

export function Theme_e43ebd2db4596328e32f2fab9c097cb2 () {
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
  <ReactMarkdown components={ComponentMap_baf0fd63d76c1aca3c2b6436ff90eb3b()} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm, remarkUnwrapImages]}>
  {"# Welcome to Reflex!\n\nThis is the base Reflex template - installed when you run `reflex init`.\n\nIf you want to use a different template, pass the `--template` flag to `reflex init`.\nFor example, if you want a more basic starting point, you can run:\n\n```bash\nreflex init --template blank\n```\n\n## About this Template\n\nThis template has the following directory structure:\n\n```bash\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 assets\n\u251c\u2500\u2500 rxconfig.py\n\u2514\u2500\u2500 {your_app}\n    \u251c\u2500\u2500 __init__.py\n    \u251c\u2500\u2500 components\n    \u2502\u00a0\u00a0 \u251c\u2500\u2500 __init__.py\n    \u2502\u00a0\u00a0 \u251c\u2500\u2500 navbar.py\n    \u2502\u00a0\u00a0 \u2514\u2500\u2500 sidebar.py\n    \u251c\u2500\u2500 pages\n    \u2502\u00a0\u00a0 \u251c\u2500\u2500 __init__.py\n    \u2502\u00a0\u00a0 \u251c\u2500\u2500 about.py\n    \u2502\u00a0\u00a0 \u251c\u2500\u2500 index.py\n    \u2502\u00a0\u00a0 \u251c\u2500\u2500 profile.py\n    \u2502\u00a0\u00a0 \u251c\u2500\u2500 settings.py\n    \u2502\u00a0\u00a0 \u2514\u2500\u2500 table.py\n    \u251c\u2500\u2500 styles.py\n    \u251c\u2500\u2500 templates\n    \u2502\u00a0\u00a0 \u251c\u2500\u2500 __init__.py\n    \u2502\u00a0\u00a0 \u2514\u2500\u2500 template.py\n    \u2514\u2500\u2500 {your_app}.py\n```\n\nSee the [Project Structure docs](https://reflex.dev/docs/getting-started/project-structure/) for more information on general Reflex project structure.\n\n### Adding Pages\n\nIn this template, the pages in your app are defined in `{your_app}/pages/`.\nEach page is a function that returns a Reflex component.\nFor example, to edit this page you can modify `{your_app}/pages/index.py`.\nSee the [pages docs](https://reflex.dev/docs/pages/routes/) for more information on pages.\n\nIn this template, instead of using `rx.add_page` or the `@rx.page` decorator,\nwe use the `@template` decorator from `{your_app}/templates/template.py`.\n\nTo add a new page:\n\n1. Add a new file in `{your_app}/pages/`. We recommend using one file per page, but you can also group pages in a single file.\n2. Add a new function with the `@template` decorator, which takes the same arguments as `@rx.page`.\n3. Import the page in your `{your_app}/pages/__init__.py` file and it will automatically be added to the app.\n4. Order the pages in `{your_app}/components/sidebar.py` and `{your_app}/components/navbar.py`.\n\n\n### Adding Components\n\nIn order to keep your code organized, we recommend putting components that are\nused across multiple pages in the `{your_app}/components/` directory.\n\nIn this template, we have a sidebar component in `{your_app}/components/sidebar.py`.\n\n### Adding State\n\nAs your app grows, we recommend using [substates](https://reflex.dev/docs/substates/overview/)\nto organize your state.\n\nYou can either define substates in their own files, or if the state is\nspecific to a page, you can define it in the page file itself.\n"}
</ReactMarkdown>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesTheme>
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

export function Errorboundary_77180630e5a5d536737c6b7bc234a06e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_error_81de1ebf543e512ddcedab4ae1d07cc1 = useCallback(((_error, _info) => ((addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  }))))), [addEvents, Event])


  return (
    <ErrorBoundary FallbackComponent={Fallback} onError={on_error_81de1ebf543e512ddcedab4ae1d07cc1}>
  <Fragment>
  <Div_64093a13086094dda35345330da0660b/>
  <Toaster_9d6e054b03c6e5d1bea1c0a5576b4e6d/>
</Fragment>
  <Theme_e43ebd2db4596328e32f2fab9c097cb2/>
  <NextHead>
  <title>
  {"About"}
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

        function ComponentMap_baf0fd63d76c1aca3c2b6436ff90eb3b () {
            const { resolvedColorMode } = useContext(ColorModeContext)
            return (
                ({ ["h1"] : (({node, children, ...props}) => (<RadixThemesHeading as={"h1"} css={({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" })} size={"6"} {...props}>  {children}</RadixThemesHeading>)), ["h2"] : (({node, children, ...props}) => (<RadixThemesHeading as={"h2"} css={({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" })} size={"5"} {...props}>  {children}</RadixThemesHeading>)), ["h3"] : (({node, children, ...props}) => (<RadixThemesHeading as={"h3"} css={({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" })} size={"4"} {...props}>  {children}</RadixThemesHeading>)), ["h4"] : (({node, children, ...props}) => (<RadixThemesHeading as={"h4"} css={({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" })} size={"3"} {...props}>  {children}</RadixThemesHeading>)), ["h5"] : (({node, children, ...props}) => (<RadixThemesHeading as={"h5"} css={({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" })} size={"2"} {...props}>  {children}</RadixThemesHeading>)), ["h6"] : (({node, children, ...props}) => (<RadixThemesHeading as={"h6"} css={({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" })} size={"1"} {...props}>  {children}</RadixThemesHeading>)), ["p"] : (({node, children, ...props}) => (<RadixThemesText as={"p"} css={({ ["marginTop"] : "1em", ["marginBottom"] : "1em" })} {...props}>  {children}</RadixThemesText>)), ["ul"] : (({node, children, ...props}) => (<ul css={({ ["listStyleType"] : "disc", ["marginTop"] : "1em", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem", ["direction"] : "column" })}>  {children}</ul>)), ["ol"] : (({node, children, ...props}) => (<ol css={({ ["listStyleType"] : "decimal", ["marginTop"] : "1em", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem", ["direction"] : "column" })}>  {children}</ol>)), ["li"] : (({node, children, ...props}) => (<li css={({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" })}>  {children}</li>)), ["a"] : (({node, children, ...props}) => (<RadixThemesLink css={({ ["fontWeight"] : "bold", ["textDecoration"] : "underline", ["textDecorationColor"] : "var(--accent-10)", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} {...props}>  {children}</RadixThemesLink>)), ["code"] : (({node, inline, className, children, ...props}) => {     const match = (className || '').match(/language-(?<lang>.*)/);     const language = match ? match[1] : '';     if (language) {     (async () => {       try {         const module = await import(`react-syntax-highlighter/dist/cjs/languages/prism/${language}`);         SyntaxHighlighter.registerLanguage(language, module.default);       } catch (error) {         console.error(`Error importing language module for ${language}:`, error);       }     })();   }     return inline ? (         <RadixThemesCode color={"gray"} {...props}>  {children}</RadixThemesCode>     ) : (         <SyntaxHighlighter children={((Array.isArray(children)) ? children.join("\n") : children)} css={({ ["marginTop"] : "1em", ["marginBottom"] : "1em" })} customStyle={({ ["marginTop"] : "1em", ["marginBottom"] : "1em" })} language={language} style={((resolvedColorMode === "light") ? oneLight : oneDark)} {...props}/>     );       }), ["codeblock"] : (({node, children, ...props}) => (<SyntaxHighlighter children={((Array.isArray(children)) ? children.join("\n") : children)} css={({ ["marginTop"] : "1em", ["marginBottom"] : "1em" })} customStyle={({ ["marginTop"] : "1em", ["marginBottom"] : "1em" })} language={"python"} style={((resolvedColorMode === "light") ? oneLight : oneDark)} {...props}/>)) })
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
    <Errorboundary_77180630e5a5d536737c6b7bc234a06e/>
  )
}
