module.exports = [
"[project]/src/utils/formatDate.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDate",
    ()=>formatDate
]);
function formatDate(date, includeRelative = false) {
    const currentDate = new Date();
    if (!date.includes("T")) {
        date = `${date}T00:00:00`;
    }
    const targetDate = new Date(date);
    const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
    const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
    const daysAgo = currentDate.getDate() - targetDate.getDate();
    let formattedDate = "";
    if (yearsAgo > 0) {
        formattedDate = `${yearsAgo}y ago`;
    } else if (monthsAgo > 0) {
        formattedDate = `${monthsAgo}mo ago`;
    } else if (daysAgo > 0) {
        formattedDate = `${daysAgo}d ago`;
    } else {
        formattedDate = "Today";
    }
    const fullDate = targetDate.toLocaleString("en-us", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
    if (!includeRelative) {
        return fullDate;
    }
    return `${fullDate} (${formattedDate})`;
}
}),
"[project]/src/components/blog/Post.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Post
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Card.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Column.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Media$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Media.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Avatar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatDate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/formatDate.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/resources/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$content$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/resources/content.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Post({ post, thumbnail, direction }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        fillWidth: true,
        href: `/blog/${post.slug}`,
        transition: "micro-medium",
        direction: direction,
        border: "transparent",
        background: "transparent",
        padding: "4",
        radius: "l-4",
        gap: direction === "column" ? undefined : "24",
        s: {
            direction: "column"
        },
        children: [
            post.metadata.image && thumbnail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Media$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Media"], {
                priority: true,
                sizes: "(max-width: 768px) 100vw, 640px",
                border: "neutral-alpha-weak",
                cursor: "interactive",
                radius: "l",
                src: post.metadata.image,
                alt: "Thumbnail of " + post.metadata.title,
                aspectRatio: "16 / 9"
            }, void 0, false, {
                fileName: "[project]/src/components/blog/Post.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Row"], {
                fillWidth: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Column"], {
                    maxWidth: 28,
                    paddingY: "24",
                    paddingX: "l",
                    gap: "20",
                    vertical: "center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Row"], {
                            gap: "24",
                            vertical: "center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Row"], {
                                    vertical: "center",
                                    gap: "16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$content$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["person"].avatar,
                                            size: "s"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blog/Post.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                            variant: "label-default-s",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$content$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["person"].name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blog/Post.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/blog/Post.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                    variant: "body-default-xs",
                                    onBackground: "neutral-weak",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatDate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(post.metadata.publishedAt, false)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blog/Post.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/blog/Post.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                            variant: "heading-strong-l",
                            wrap: "balance",
                            children: post.metadata.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/blog/Post.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        post.metadata.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                            variant: "label-strong-s",
                            onBackground: "neutral-weak",
                            children: post.metadata.tag
                        }, void 0, false, {
                            fileName: "[project]/src/components/blog/Post.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/blog/Post.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/blog/Post.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, post.slug, true, {
        fileName: "[project]/src/components/blog/Post.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/blog/ShareSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShareSection",
    ()=>ShareSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$contexts$2f$ToastProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/contexts/ToastProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/resources/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/resources/once-ui.config.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const socialPlatforms = {
    x: {
        name: "x",
        icon: "twitter",
        label: "X",
        generateUrl: (title, url)=>`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
    },
    linkedin: {
        name: "linkedin",
        icon: "linkedin",
        label: "LinkedIn",
        generateUrl: (title, url)=>`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    },
    facebook: {
        name: "facebook",
        icon: "facebook",
        label: "Facebook",
        generateUrl: (title, url)=>`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    },
    pinterest: {
        name: "pinterest",
        icon: "pinterest",
        label: "Pinterest",
        generateUrl: (title, url)=>`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`
    },
    whatsapp: {
        name: "whatsapp",
        icon: "whatsapp",
        label: "WhatsApp",
        generateUrl: (title, url)=>`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`
    },
    reddit: {
        name: "reddit",
        icon: "reddit",
        label: "Reddit",
        generateUrl: (title, url)=>`https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
    },
    telegram: {
        name: "telegram",
        icon: "telegram",
        label: "Telegram",
        generateUrl: (title, url)=>`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
    },
    email: {
        name: "email",
        icon: "email",
        label: "Email",
        generateUrl: (title, url)=>`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this post: ${url}`)}`
    }
};
function ShareSection({ title, url }) {
    const { addToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$contexts$2f$ToastProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    // Don't render if sharing is disabled
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["socialSharing"].display) {
        return null;
    }
    const handleCopy = async ()=>{
        try {
            await navigator.clipboard.writeText(url);
            addToast({
                variant: "success",
                message: "Link copied to clipboard"
            });
        } catch (err) {
            console.error('Failed to copy: ', err);
            addToast({
                variant: "danger",
                message: "Failed to copy link"
            });
        }
    };
    // Get enabled platforms
    const enabledPlatforms = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["socialSharing"].platforms).filter(([_, enabled])=>enabled && _ !== 'copyLink').map(([platformKey])=>({
            key: platformKey,
            ...socialPlatforms[platformKey]
        })).filter((platform)=>platform.name); // Filter out platforms that don't exist in our definitions
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Row"], {
        fillWidth: true,
        center: true,
        gap: "16",
        marginTop: "32",
        marginBottom: "16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                variant: "label-default-m",
                onBackground: "neutral-weak",
                children: "Share this post:"
            }, void 0, false, {
                fileName: "[project]/src/components/blog/ShareSection.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Row"], {
                "data-border": "rounded",
                gap: "16",
                horizontal: "center",
                wrap: true,
                children: [
                    enabledPlatforms.map((platform, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "secondary",
                            size: "s",
                            href: platform.generateUrl(title, url),
                            prefixIcon: platform.icon
                        }, index, false, {
                            fileName: "[project]/src/components/blog/ShareSection.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["socialSharing"].platforms.copyLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "secondary",
                        size: "s",
                        onClick: handleCopy,
                        prefixIcon: "openLink"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blog/ShareSection.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/blog/ShareSection.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/blog/ShareSection.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_892884d9._.js.map