(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/about/about.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "blockAlign": "about-module-scss-module__a59t3q__blockAlign",
  "hover": "about-module-scss-module__a59t3q__hover",
  "textAlign": "about-module-scss-module__a59t3q__textAlign",
});
}),
"[project]/src/components/about/TableOfContents.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Column.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Flex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2f$about$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/about/about.module.scss [app-client] (css module)");
"use client";
;
;
;
const TableOfContents = ({ structure, about })=>{
    const scrollTo = (id, offset)=>{
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };
    if (!about.tableOfContent.display) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Column"], {
        left: "0",
        style: {
            top: "50%",
            transform: "translateY(-50%)",
            whiteSpace: "nowrap"
        },
        position: "fixed",
        paddingLeft: "24",
        gap: "32",
        m: {
            hide: true
        },
        children: structure.filter((section)=>section.display).map((section, sectionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Column"], {
                gap: "12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                        cursor: "interactive",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2f$about$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hover,
                        gap: "8",
                        vertical: "center",
                        onClick: ()=>scrollTo(section.title, 80),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                                height: "1",
                                minWidth: "16",
                                background: "neutral-strong"
                            }, void 0, false, {
                                fileName: "[project]/src/components/about/TableOfContents.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                children: section.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/about/TableOfContents.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/about/TableOfContents.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    about.tableOfContent.subItems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: section.items.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                                l: {
                                    hide: true
                                },
                                style: {
                                    cursor: "pointer"
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2f$about$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hover,
                                gap: "12",
                                paddingLeft: "24",
                                vertical: "center",
                                onClick: ()=>scrollTo(item, 80),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                                        height: "1",
                                        minWidth: "8",
                                        background: "neutral-strong"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/about/TableOfContents.tsx",
                                        lineNumber: 77,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        children: item
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/about/TableOfContents.tsx",
                                        lineNumber: 78,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, itemIndex, true, {
                                fileName: "[project]/src/components/about/TableOfContents.tsx",
                                lineNumber: 67,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false)
                ]
            }, sectionIndex, true, {
                fileName: "[project]/src/components/about/TableOfContents.tsx",
                lineNumber: 53,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/about/TableOfContents.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TableOfContents;
const __TURBOPACK__default__export__ = TableOfContents;
var _c;
__turbopack_context__.k.register(_c, "TableOfContents");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_about_6cbe00ed._.js.map