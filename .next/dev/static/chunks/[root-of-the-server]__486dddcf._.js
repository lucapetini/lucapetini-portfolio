(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/resources/content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "about",
    ()=>about,
    "blog",
    ()=>blog,
    "gallery",
    ()=>gallery,
    "home",
    ()=>home,
    "newsletter",
    ()=>newsletter,
    "person",
    ()=>person,
    "social",
    ()=>social,
    "work",
    ()=>work
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Text.js [app-client] (ecmascript)");
;
;
const person = {
    firstName: "Luca",
    lastName: "Petini",
    name: `Luca Petini`,
    role: "Design Engineer",
    avatar: "/images/avatar.jpg",
    email: "example@gmail.com",
    location: "Europe/Rome",
    languages: [
        "English",
        "Italian"
    ]
};
const newsletter = {
    display: true,
    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            "Subscribe to ",
            person.firstName,
            "'s Newsletter"
        ]
    }, void 0, true),
    description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: "My weekly newsletter about creativity and engineering"
    }, void 0, false)
};
const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    // Set essentials: true for links you want to show on the about page
    {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/once-ui-system",
        essential: true
    },
    {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/company/once-ui/",
        essential: true
    },
    {
        name: "Instagram",
        icon: "instagram",
        link: "https://www.instagram.com/once_ui/",
        essential: false
    },
    {
        name: "Threads",
        icon: "threads",
        link: "https://www.threads.com/@once_ui",
        essential: true
    },
    {
        name: "Email",
        icon: "email",
        link: `mailto:${person.email}`,
        essential: true
    }
];
const home = {
    path: "/",
    image: "/images/og/home.jpg",
    label: "Home",
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: "Building bridges between design and code"
    }, void 0, false),
    featured: {
        display: true,
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
            gap: "12",
            vertical: "center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    className: "ml-4",
                    children: "Once UI"
                }, void 0, false, {
                    fileName: "[project]/src/resources/content.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                    background: "brand-alpha-strong",
                    vert: true,
                    height: "20"
                }, void 0, false, {
                    fileName: "[project]/src/resources/content.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    marginRight: "4",
                    onBackground: "brand-medium",
                    children: "Featured work"
                }, void 0, false, {
                    fileName: "[project]/src/resources/content.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/resources/content.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        href: "/work/building-once-ui-a-customizable-design-system"
    },
    subline: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            "I'm Selene, a design engineer at ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                as: "span",
                size: "xl",
                weight: "strong",
                children: "ONCE UI"
            }, void 0, false, {
                fileName: "[project]/src/resources/content.tsx",
                lineNumber: 79,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0)),
            ", where I craft intuitive ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/src/resources/content.tsx",
                lineNumber: 79,
                columnNumber: 120
            }, ("TURBOPACK compile-time value", void 0)),
            " user experiences. After hours, I build my own projects."
        ]
    }, void 0, true)
};
const about = {
    path: "/about",
    label: "About",
    title: `About – ${person.name}`,
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: "https://cal.com"
    },
    intro: {
        display: true,
        title: "Introduction",
        description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Selene is a Jakarta-based design engineer with a passion for transforming complex challenges into simple, elegant design solutions. Her work spans digital interfaces, interactive experiences, and the convergence of design and technology."
        }, void 0, false)
    },
    work: {
        display: true,
        title: "Work Experience",
        experiences: [
            {
                company: "FLY",
                timeframe: "2022 - Present",
                role: "Senior Design Engineer",
                achievements: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: "Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times."
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: "Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster."
                    }, void 0, false)
                ],
                images: [
                    // optional: leave the array empty if you don't want to display images
                    {
                        src: "/images/projects/project-01/cover-01.jpg",
                        alt: "Once UI Project",
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: "Creativ3",
                timeframe: "2018 - 2022",
                role: "Lead Designer",
                achievements: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: "Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%."
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: "Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue."
                    }, void 0, false)
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true,
        title: "Studies",
        institutions: [
            {
                name: "University of Jakarta",
                description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: "Studied software engineering."
                }, void 0, false)
            },
            {
                name: "Build the Future",
                description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: "Studied online marketing and personal branding."
                }, void 0, false)
            }
        ]
    },
    technical: {
        display: true,
        title: "Technical skills",
        skills: [
            {
                title: "Figma",
                description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: "Able to prototype in Figma with Once UI with unnatural speed."
                }, void 0, false),
                tags: [
                    {
                        name: "Figma",
                        icon: "figma"
                    }
                ],
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: "/images/projects/project-01/cover-02.jpg",
                        alt: "Project image",
                        width: 16,
                        height: 9
                    },
                    {
                        src: "/images/projects/project-01/cover-03.jpg",
                        alt: "Project image",
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: "Next.js",
                description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: "Building next gen apps with Next.js + Once UI + Supabase."
                }, void 0, false),
                tags: [
                    {
                        name: "JavaScript",
                        icon: "javascript"
                    },
                    {
                        name: "Next.js",
                        icon: "nextjs"
                    },
                    {
                        name: "Supabase",
                        icon: "supabase"
                    }
                ],
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: "/images/projects/project-01/cover-04.jpg",
                        alt: "Project image",
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]
    }
};
const blog = {
    path: "/blog",
    label: "Blog",
    title: "Writing about design and tech...",
    description: `Read what ${person.name} has been up to recently`
};
const work = {
    path: "/work",
    label: "Work",
    title: `Projects – ${person.name}`,
    description: `Design and dev projects by ${person.name}`
};
const gallery = {
    path: "/gallery",
    label: "Gallery",
    title: `Photo gallery – ${person.name}`,
    description: `A photo collection by ${person.name}`,
    // Images by https://lorant.one
    // These are placeholder images, replace with your own
    images: [
        {
            src: "/images/gallery/horizontal-1.jpg",
            alt: "image",
            orientation: "horizontal"
        },
        {
            src: "/images/gallery/vertical-4.jpg",
            alt: "image",
            orientation: "vertical"
        },
        {
            src: "/images/gallery/horizontal-3.jpg",
            alt: "image",
            orientation: "horizontal"
        },
        {
            src: "/images/gallery/vertical-1.jpg",
            alt: "image",
            orientation: "vertical"
        },
        {
            src: "/images/gallery/vertical-2.jpg",
            alt: "image",
            orientation: "vertical"
        },
        {
            src: "/images/gallery/horizontal-2.jpg",
            alt: "image",
            orientation: "horizontal"
        },
        {
            src: "/images/gallery/horizontal-4.jpg",
            alt: "image",
            orientation: "horizontal"
        },
        {
            src: "/images/gallery/vertical-3.jpg",
            alt: "image",
            orientation: "vertical"
        }
    ]
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/internal/font/google/geist_d82bf9db.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "geist_d82bf9db-module__Ifi_Dq__className",
  "variable": "geist_d82bf9db-module__Ifi_Dq__variable",
});
}),
"[next]/internal/font/google/geist_d82bf9db.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_d82bf9db$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_d82bf9db.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_d82bf9db$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist', 'Geist Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_d82bf9db$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_d82bf9db$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/geist_250f8b91.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "geist_250f8b91-module__B2UTAq__className",
  "variable": "geist_250f8b91-module__B2UTAq__variable",
});
}),
"[next]/internal/font/google/geist_250f8b91.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_250f8b91$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_250f8b91.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_250f8b91$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist', 'Geist Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_250f8b91$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_250f8b91$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/geist_4edd9b70.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "geist_4edd9b70-module__GC7HaW__className",
  "variable": "geist_4edd9b70-module__GC7HaW__variable",
});
}),
"[next]/internal/font/google/geist_4edd9b70.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_4edd9b70$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_4edd9b70.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_4edd9b70$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist', 'Geist Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_4edd9b70$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_4edd9b70$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/geist_mono_90672d7c.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "geist_mono_90672d7c-module__qcY_rq__className",
  "variable": "geist_mono_90672d7c-module__qcY_rq__variable",
});
}),
"[next]/internal/font/google/geist_mono_90672d7c.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_90672d7c$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_mono_90672d7c.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_90672d7c$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist Mono', 'Geist Mono Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_90672d7c$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_90672d7c$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/src/resources/once-ui.config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "baseURL",
    ()=>baseURL,
    "dataStyle",
    ()=>dataStyle,
    "display",
    ()=>display,
    "effects",
    ()=>effects,
    "fonts",
    ()=>fonts,
    "mailchimp",
    ()=>mailchimp,
    "protectedRoutes",
    ()=>protectedRoutes,
    "routes",
    ()=>routes,
    "sameAs",
    ()=>sameAs,
    "schema",
    ()=>schema,
    "socialSharing",
    ()=>socialSharing,
    "style",
    ()=>style
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/resources/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/resources/content.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_d82bf9db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_d82bf9db.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_250f8b91$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_250f8b91.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_4edd9b70$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_4edd9b70.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_90672d7c$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_mono_90672d7c.js [app-client] (ecmascript)");
;
const baseURL = "https://lucapetini.com";
const routes = {
    "/": true,
    "/about": true,
    "/work": true,
    "/blog": true,
    "/gallery": true
};
const display = {
    location: true,
    time: true,
    themeSwitcher: true
};
// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes = {
    "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true
};
;
;
;
;
const fonts = {
    heading: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_d82bf9db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    body: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_250f8b91$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    label: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_4edd9b70$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    code: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_90672d7c$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
// default customization applied to the HTML in the main layout.tsx
const style = {
    theme: "system",
    neutral: "gray",
    brand: "cyan",
    accent: "red",
    solid: "contrast",
    solidStyle: "flat",
    border: "playful",
    surface: "translucent",
    transition: "all",
    scaling: "100"
};
const dataStyle = {
    variant: "gradient",
    mode: "categorical",
    height: 24,
    axis: {
        stroke: "var(--neutral-alpha-weak)"
    },
    tick: {
        fill: "var(--neutral-on-background-weak)",
        fontSize: 11,
        line: false
    }
};
const effects = {
    mask: {
        cursor: false,
        x: 50,
        y: 0,
        radius: 100
    },
    gradient: {
        display: false,
        opacity: 100,
        x: 50,
        y: 60,
        width: 100,
        height: 50,
        tilt: 0,
        colorStart: "accent-background-strong",
        colorEnd: "page-background"
    },
    dots: {
        display: true,
        opacity: 40,
        size: "2",
        color: "brand-background-strong"
    },
    grid: {
        display: false,
        opacity: 100,
        color: "neutral-alpha-medium",
        width: "0.25rem",
        height: "0.25rem"
    },
    lines: {
        display: false,
        opacity: 100,
        color: "neutral-alpha-weak",
        size: "16",
        thickness: 1,
        angle: 45
    }
};
const mailchimp = {
    action: "https://url/subscribe/post?parameters",
    effects: {
        mask: {
            cursor: true,
            x: 50,
            y: 0,
            radius: 100
        },
        gradient: {
            display: true,
            opacity: 90,
            x: 50,
            y: 0,
            width: 50,
            height: 50,
            tilt: 0,
            colorStart: "accent-background-strong",
            colorEnd: "static-transparent"
        },
        dots: {
            display: true,
            opacity: 20,
            size: "2",
            color: "brand-on-background-weak"
        },
        grid: {
            display: false,
            opacity: 100,
            color: "neutral-alpha-medium",
            width: "0.25rem",
            height: "0.25rem"
        },
        lines: {
            display: false,
            opacity: 100,
            color: "neutral-alpha-medium",
            size: "16",
            thickness: 1,
            angle: 90
        }
    }
};
// default schema data
const schema = {
    logo: "",
    type: "Organization",
    name: "Once UI",
    description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["home"].description,
    email: "lorant@once-ui.com"
};
// social links
const sameAs = {
    threads: "https://www.threads.com/@once_ui",
    linkedin: "https://www.linkedin.com/company/once-ui/",
    discord: "https://discord.com/invite/5EyAQ4eNdS"
};
// social sharing configuration for blog posts
const socialSharing = {
    display: true,
    platforms: {
        x: true,
        linkedin: true,
        facebook: false,
        pinterest: false,
        whatsapp: false,
        reddit: false,
        telegram: false,
        email: true,
        copyLink: true
    }
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/resources/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// import a pre-defined template for config and content options
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/resources/content.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/resources/once-ui.config.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$ToggleButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/ToggleButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$contexts$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/contexts/ThemeProvider.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ThemeToggle = ()=>{
    _s();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$contexts$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTheme, setCurrentTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setMounted(true);
            setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light");
        }
    }["ThemeToggle.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light");
        }
    }["ThemeToggle.useEffect"], [
        theme
    ]);
    const icon = currentTheme === "dark" ? "light" : "dark";
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$ToggleButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleButton"], {
        prefixIcon: icon,
        onClick: ()=>setTheme(nextTheme),
        "aria-label": `Switch to ${nextTheme} mode`
    }, void 0, false, {
        fileName: "[project]/src/components/ThemeToggle.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeToggle, "+BIjrvQ/aDj7uBI1HF2qKRlMC4o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$contexts$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "mask": "Header-module-scss-module__t7BEda__mask",
  "position": "Header-module-scss-module__t7BEda__position",
});
}),
"[project]/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Fade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Fade.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Flex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$ToggleButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/ToggleButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/resources/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/resources/once-ui.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/resources/content.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThemeToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Header.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const TimeDisplay = ({ timeZone, locale = "en-GB" })=>{
    _s();
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimeDisplay.useEffect": ()=>{
            const updateTime = {
                "TimeDisplay.useEffect.updateTime": ()=>{
                    const now = new Date();
                    const options = {
                        timeZone,
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: false
                    };
                    const timeString = new Intl.DateTimeFormat(locale, options).format(now);
                    setCurrentTime(timeString);
                }
            }["TimeDisplay.useEffect.updateTime"];
            updateTime();
            const intervalId = setInterval(updateTime, 1000);
            return ({
                "TimeDisplay.useEffect": ()=>clearInterval(intervalId)
            })["TimeDisplay.useEffect"];
        }
    }["TimeDisplay.useEffect"], [
        timeZone,
        locale
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: currentTime
    }, void 0, false);
};
_s(TimeDisplay, "i0I2+MURYPkIx9g9MFE9WAWRu88=");
_c = TimeDisplay;
const __TURBOPACK__default__export__ = TimeDisplay;
const Header = ()=>{
    _s1();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() ?? "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Fade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fade"], {
                s: {
                    hide: true
                },
                fillWidth: true,
                position: "fixed",
                height: "80",
                zIndex: 9
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Fade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fade"], {
                hide: true,
                s: {
                    hide: false
                },
                fillWidth: true,
                position: "fixed",
                bottom: "0",
                to: "top",
                height: "80",
                zIndex: 9
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                fitHeight: true,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].position,
                position: "sticky",
                as: "header",
                zIndex: 9,
                fillWidth: true,
                padding: "8",
                horizontal: "center",
                "data-border": "rounded",
                s: {
                    position: "fixed"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                        paddingLeft: "12",
                        fillWidth: true,
                        vertical: "center",
                        textVariant: "body-default-s",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["display"].location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                            s: {
                                hide: true
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["person"].location
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 76,
                            columnNumber: 32
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                        fillWidth: true,
                        horizontal: "center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                            background: "page",
                            border: "neutral-alpha-weak",
                            radius: "m-4",
                            shadow: "l",
                            padding: "4",
                            horizontal: "center",
                            zIndex: 1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                                gap: "4",
                                vertical: "center",
                                textVariant: "body-default-s",
                                suppressHydrationWarning: true,
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"]["/"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$ToggleButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleButton"], {
                                        prefixIcon: "home",
                                        href: "/",
                                        selected: pathname === "/"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                        background: "neutral-alpha-medium",
                                        vert: true,
                                        maxHeight: "24"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"]["/about"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                                                s: {
                                                    hide: true
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$ToggleButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleButton"], {
                                                    prefixIcon: "person",
                                                    href: "/about",
                                                    label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["about"].label,
                                                    selected: pathname === "/about"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 95,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                                                hide: true,
                                                s: {
                                                    hide: false
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$ToggleButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleButton"], {
                                                    prefixIcon: "person",
                                                    href: "/about",
                                                    selected: pathname === "/about"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"]["/work"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                                                s: {
                                                    hide: true
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$ToggleButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleButton"], {
                                                    prefixIcon: "grid",
                                                    href: "/work",
                                                    label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["work"].label,
                                                    selected: pathname.startsWith("/work")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                                                hide: true,
                                                s: {
                                                    hide: false
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$ToggleButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleButton"], {
                                                    prefixIcon: "grid",
                                                    href: "/work",
                                                    selected: pathname.startsWith("/work")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"]["/blog"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                                                s: {
                                                    hide: true
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$ToggleButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleButton"], {
                                                    prefixIcon: "book",
                                                    href: "/blog",
                                                    label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blog"].label,
                                                    selected: pathname.startsWith("/blog")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                                                hide: true,
                                                s: {
                                                    hide: false
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$ToggleButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleButton"], {
                                                    prefixIcon: "book",
                                                    href: "/blog",
                                                    selected: pathname.startsWith("/blog")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 141,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"]["/gallery"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                                                s: {
                                                    hide: true
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$ToggleButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleButton"], {
                                                    prefixIcon: "gallery",
                                                    href: "/gallery",
                                                    label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gallery"].label,
                                                    selected: pathname.startsWith("/gallery")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 152,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                                                hide: true,
                                                s: {
                                                    hide: false
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$ToggleButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleButton"], {
                                                    prefixIcon: "gallery",
                                                    href: "/gallery",
                                                    selected: pathname.startsWith("/gallery")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 160,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["display"].themeSwitcher && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                background: "neutral-alpha-medium",
                                                vert: true,
                                                maxHeight: "24"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 171,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                        fillWidth: true,
                        horizontal: "end",
                        vertical: "center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                            paddingRight: "12",
                            horizontal: "end",
                            vertical: "center",
                            textVariant: "body-default-s",
                            gap: "20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                                s: {
                                    hide: true
                                },
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["display"].time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimeDisplay, {
                                    timeZone: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["person"].location
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 187,
                                    columnNumber: 32
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s1(Header, "wVXOWZKWdId76kQQO0KX6Oz3JDA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = Header;
var _c, _c1;
__turbopack_context__.k.register(_c, "TimeDisplay");
__turbopack_context__.k.register(_c1, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Mailchimp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mailchimp",
    ()=>Mailchimp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/resources/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/resources/once-ui.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/resources/content.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Heading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Background$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Background.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Column.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function debounce(func, delay) {
    let timeout;
    return (...args)=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>func(...args), delay);
    };
}
const Mailchimp = ({ ...flex })=>{
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [touched, setTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const validateEmail = (email)=>{
        if (email === "") {
            return true;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };
    const handleChange = (e)=>{
        const value = e.target.value;
        setEmail(value);
        if (!validateEmail(value)) {
            setError("Please enter a valid email address.");
        } else {
            setError("");
        }
    };
    const debouncedHandleChange = debounce(handleChange, 2000);
    const handleBlur = ()=>{
        setTouched(true);
        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
        }
    };
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newsletter"].display === false) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Column"], {
        overflow: "hidden",
        fillWidth: true,
        padding: "xl",
        radius: "l",
        marginBottom: "m",
        horizontal: "center",
        align: "center",
        background: "surface",
        border: "neutral-alpha-weak",
        ...flex,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Background$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Background"], {
                top: "0",
                position: "absolute",
                mask: {
                    x: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.mask.x,
                    y: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.mask.y,
                    radius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.mask.radius,
                    cursor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.mask.cursor
                },
                gradient: {
                    display: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.gradient.display,
                    opacity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.gradient.opacity,
                    x: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.gradient.x,
                    y: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.gradient.y,
                    width: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.gradient.width,
                    height: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.gradient.height,
                    tilt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.gradient.tilt,
                    colorStart: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.gradient.colorStart,
                    colorEnd: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.gradient.colorEnd
                },
                dots: {
                    display: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.dots.display,
                    opacity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.dots.opacity,
                    size: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.dots.size,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.dots.color
                },
                grid: {
                    display: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.grid.display,
                    opacity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.grid.opacity,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.grid.color,
                    width: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.grid.width,
                    height: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.grid.height
                },
                lines: {
                    display: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.lines.display,
                    opacity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.lines.opacity,
                    size: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.lines.size,
                    thickness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.lines.thickness,
                    angle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.lines.angle,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].effects.lines.color
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Mailchimp.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Column"], {
                maxWidth: "xs",
                horizontal: "center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                        marginBottom: "s",
                        variant: "display-strong-xs",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newsletter"].title
                    }, void 0, false, {
                        fileName: "[project]/src/components/Mailchimp.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        wrap: "balance",
                        marginBottom: "l",
                        variant: "body-default-l",
                        onBackground: "neutral-weak",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newsletter"].description
                    }, void 0, false, {
                        fileName: "[project]/src/components/Mailchimp.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Mailchimp.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                style: {
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                },
                action: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailchimp"].action,
                method: "post",
                id: "mc-embedded-subscribe-form",
                name: "mc-embedded-subscribe-form",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                    id: "mc_embed_signup_scroll",
                    fillWidth: true,
                    maxWidth: 24,
                    s: {
                        direction: "column"
                    },
                    gap: "8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            formNoValidate: true,
                            id: "mce-EMAIL",
                            name: "EMAIL",
                            type: "email",
                            placeholder: "Email",
                            required: true,
                            onChange: (e)=>{
                                if (error) {
                                    handleChange(e);
                                } else {
                                    debouncedHandleChange(e);
                                }
                            },
                            onBlur: handleBlur,
                            errorMessage: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/Mailchimp.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "none"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                readOnly: true,
                                name: "group[3492][1]",
                                id: "mce-group[3492]-3492-0",
                                value: "",
                                checked: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/Mailchimp.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Mailchimp.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "mce-responses",
                            className: "clearfalse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "response",
                                    id: "mce-error-response",
                                    style: {
                                        display: "none"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Mailchimp.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "response",
                                    id: "mce-success-response",
                                    style: {
                                        display: "none"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Mailchimp.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Mailchimp.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": "true",
                            style: {
                                position: "absolute",
                                left: "-5000px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                readOnly: true,
                                name: "b_c1a5a210340eb6c7bff33b2ba_0462d244aa",
                                tabIndex: -1,
                                value: ""
                            }, void 0, false, {
                                fileName: "[project]/src/components/Mailchimp.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Mailchimp.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "clear",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                                height: "48",
                                vertical: "center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    id: "mc-embedded-subscribe",
                                    value: "Subscribe",
                                    size: "m",
                                    fillWidth: true,
                                    children: "Subscribe"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Mailchimp.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Mailchimp.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Mailchimp.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Mailchimp.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Mailchimp.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Mailchimp.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Mailchimp, "dmjC3RNS/gdajMkaDqO6zlxraeY=");
_c = Mailchimp;
var _c;
__turbopack_context__.k.register(_c, "Mailchimp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectCard",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$AvatarGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/AvatarGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Carousel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Carousel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Column.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Flex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Heading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$SmartLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/SmartLink.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Text.js [app-client] (ecmascript)");
"use client";
;
;
const ProjectCard = ({ href, images = [], title, content, description, avatars, link })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Column"], {
        fillWidth: true,
        gap: "m",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Carousel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Carousel"], {
                sizes: "(max-width: 960px) 100vw, 960px",
                items: images.map((image)=>({
                        slide: image,
                        alt: title
                    }))
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                s: {
                    direction: "column"
                },
                fillWidth: true,
                paddingX: "s",
                paddingTop: "12",
                paddingBottom: "24",
                gap: "l",
                children: [
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                        flex: 5,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                            as: "h2",
                            wrap: "balance",
                            variant: "heading-strong-xl",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectCard.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    (avatars?.length > 0 || description?.trim() || content?.trim()) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Column"], {
                        flex: 7,
                        gap: "16",
                        children: [
                            avatars?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$AvatarGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarGroup"], {
                                avatars: avatars,
                                size: "m",
                                reverse: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectCard.tsx",
                                lineNumber: 59,
                                columnNumber: 37
                            }, ("TURBOPACK compile-time value", void 0)),
                            description?.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                wrap: "balance",
                                variant: "body-default-s",
                                onBackground: "neutral-weak",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectCard.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                                gap: "24",
                                wrap: true,
                                children: [
                                    content?.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$SmartLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartLink"], {
                                        suffixIcon: "arrowRight",
                                        style: {
                                            margin: "0",
                                            width: "fit-content"
                                        },
                                        href: href,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                            variant: "body-default-s",
                                            children: "Read case study"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectCard.tsx",
                                            lineNumber: 72,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectCard.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$SmartLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartLink"], {
                                        suffixIcon: "arrowUpRightFromSquare",
                                        style: {
                                            margin: "0",
                                            width: "fit-content"
                                        },
                                        href: link,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                            variant: "body-default-s",
                                            children: "View project"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectCard.tsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectCard.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectCard.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectCard.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectCard.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectCard.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ProjectCard;
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/HeadingLink.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "control": "HeadingLink-module-scss-module__jpdnfa__control",
  "text": "HeadingLink-module-scss-module__jpdnfa__text",
  "visibility": "HeadingLink-module-scss-module__jpdnfa__visibility",
});
}),
"[project]/src/components/HeadingLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeadingLink",
    ()=>HeadingLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Heading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Flex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$contexts$2f$ToastProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/contexts/ToastProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadingLink$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/HeadingLink.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const HeadingLink = ({ id, level, children, style })=>{
    _s();
    const { addToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$contexts$2f$ToastProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const copyURL = (id)=>{
        const url = `${window.location.origin}${window.location.pathname}#${id}`;
        navigator.clipboard.writeText(url).then(()=>{
            addToast({
                variant: "success",
                message: "Link copied to clipboard."
            });
        }, ()=>{
            addToast({
                variant: "danger",
                message: "Failed to copy link."
            });
        });
    };
    const variantMap = {
        1: "display-strong-xs",
        2: "heading-strong-xl",
        3: "heading-strong-l",
        4: "heading-strong-m",
        5: "heading-strong-s",
        6: "heading-strong-xs"
    };
    const variant = variantMap[level];
    const asTag = `h${level}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        style: style,
        onClick: ()=>copyURL(id),
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadingLink$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].control,
        vertical: "center",
        gap: "4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadingLink$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                id: id,
                variant: variant,
                as: asTag,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/HeadingLink.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadingLink$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visibility,
                size: "s",
                icon: "openLink",
                variant: "ghost",
                tooltip: "Copy",
                tooltipPosition: "right"
            }, void 0, false, {
                fileName: "[project]/src/components/HeadingLink.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeadingLink.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HeadingLink, "ubwSGUJGTwpn9cIwx73/Ga/BuiI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$contexts$2f$ToastProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = HeadingLink;
var _c;
__turbopack_context__.k.register(_c, "HeadingLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/not-found.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotFound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Column.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Heading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Text.js [app-client] (ecmascript)");
;
;
function NotFound() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Column"], {
        as: "section",
        fill: true,
        center: true,
        paddingBottom: "160",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                marginBottom: "s",
                variant: "display-strong-xl",
                children: "404"
            }, void 0, false, {
                fileName: "[project]/src/app/not-found.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                marginBottom: "l",
                variant: "display-default-xs",
                children: "Page Not Found"
            }, void 0, false, {
                fileName: "[project]/src/app/not-found.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                onBackground: "neutral-weak",
                children: "The page you are looking for does not exist."
            }, void 0, false, {
                fileName: "[project]/src/app/not-found.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/not-found.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = NotFound;
var _c;
__turbopack_context__.k.register(_c, "NotFound");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RouteGuard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RouteGuard",
    ()=>RouteGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/resources/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/resources/once-ui.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Flex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Spinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Spinner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Heading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/Column.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$PasswordInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/components/PasswordInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/not-found.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const RouteGuard = ({ children })=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isRouteEnabled, setIsRouteEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPasswordRequired, setIsPasswordRequired] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RouteGuard.useEffect": ()=>{
            const performChecks = {
                "RouteGuard.useEffect.performChecks": async ()=>{
                    setLoading(true);
                    setIsRouteEnabled(false);
                    setIsPasswordRequired(false);
                    setIsAuthenticated(false);
                    const checkRouteEnabled = {
                        "RouteGuard.useEffect.performChecks.checkRouteEnabled": ()=>{
                            if (!pathname) return false;
                            if (pathname in __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"]) {
                                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"][pathname];
                            }
                            const dynamicRoutes = [
                                "/blog",
                                "/work"
                            ];
                            for (const route of dynamicRoutes){
                                if (pathname?.startsWith(route) && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"][route]) {
                                    return true;
                                }
                            }
                            return false;
                        }
                    }["RouteGuard.useEffect.performChecks.checkRouteEnabled"];
                    const routeEnabled = checkRouteEnabled();
                    setIsRouteEnabled(routeEnabled);
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["protectedRoutes"][pathname]) {
                        setIsPasswordRequired(true);
                        const response = await fetch("/api/check-auth");
                        if (response.ok) {
                            setIsAuthenticated(true);
                        }
                    }
                    setLoading(false);
                }
            }["RouteGuard.useEffect.performChecks"];
            performChecks();
        }
    }["RouteGuard.useEffect"], [
        pathname
    ]);
    const handlePasswordSubmit = async ()=>{
        const response = await fetch("/api/authenticate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password
            })
        });
        if (response.ok) {
            setIsAuthenticated(true);
            setError(undefined);
        } else {
            setError("Incorrect password");
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
            fillWidth: true,
            paddingY: "128",
            horizontal: "center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Spinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {}, void 0, false, {
                fileName: "[project]/src/components/RouteGuard.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/RouteGuard.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!isRouteEnabled) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/RouteGuard.tsx",
            lineNumber: 88,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (isPasswordRequired && !isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Column"], {
            paddingY: "128",
            maxWidth: 24,
            gap: "24",
            center: true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                    align: "center",
                    wrap: "balance",
                    children: "This page is password protected"
                }, void 0, false, {
                    fileName: "[project]/src/components/RouteGuard.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Column"], {
                    fillWidth: true,
                    gap: "8",
                    horizontal: "center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$PasswordInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PasswordInput"], {
                            id: "password",
                            label: "Password",
                            value: password,
                            onChange: (e)=>setPassword(e.target.value),
                            errorMessage: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/RouteGuard.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handlePasswordSubmit,
                            children: "Submit"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RouteGuard.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RouteGuard.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RouteGuard.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
};
_s(RouteGuard, "t31k9mUkcNhLmpQuthjkrygfXqs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = RouteGuard;
;
var _c;
__turbopack_context__.k.register(_c, "RouteGuard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/resources/icons.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "iconLibrary",
    ()=>iconLibrary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/si/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
;
;
;
;
const iconLibrary = {
    arrowUpRight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiArrowUpRight"],
    arrowRight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiArrowRight"],
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEnvelope"],
    globe: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineGlobeAsiaAustralia"],
    person: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiUserCircleDuotone"],
    grid: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiGridFourDuotone"],
    book: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiBookBookmarkDuotone"],
    openLink: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineLink"],
    calendar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCalendarDays"],
    home: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiHouseDuotone"],
    gallery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiImageDuotone"],
    discord: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaDiscord"],
    eye: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineEye"],
    eyeOff: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineEyeSlash"],
    github: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGithub"],
    linkedin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"],
    x: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaX"],
    twitter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaXTwitter"],
    threads: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaThreads"],
    arrowUpRightFromSquare: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiArrowTopRightOnSquare"],
    document: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineDocument"],
    rocket: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineRocketLaunch"],
    javascript: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiJavascript"],
    nextjs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiNextdotjs"],
    supabase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiSupabase"],
    figma: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiFigma"],
    facebook: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFacebook"],
    pinterest: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPinterest"],
    whatsapp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"],
    reddit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReddit"],
    telegram: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTelegram"],
    instagram: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$contexts$2f$DataThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/contexts/DataThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$contexts$2f$IconProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/contexts/IconProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$contexts$2f$LayoutProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/contexts/LayoutProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$contexts$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/contexts/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$contexts$2f$ToastProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@once-ui-system/core/dist/contexts/ToastProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/resources/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/resources/once-ui.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/resources/icons.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$contexts$2f$LayoutProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$contexts$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
            brand: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["style"].brand,
            accent: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["style"].accent,
            neutral: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["style"].neutral,
            solid: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["style"].solid,
            solidStyle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["style"].solidStyle,
            border: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["style"].border,
            surface: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["style"].surface,
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["style"].transition,
            scaling: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["style"].scaling,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$contexts$2f$DataThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataThemeProvider"], {
                variant: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataStyle"].variant,
                mode: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataStyle"].mode,
                height: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataStyle"].height,
                axis: {
                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataStyle"].axis.stroke
                },
                tick: {
                    fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataStyle"].tick.fill,
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataStyle"].tick.fontSize,
                    line: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$once$2d$ui$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataStyle"].tick.line
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$contexts$2f$ToastProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastProvider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$once$2d$ui$2d$system$2f$core$2f$dist$2f$contexts$2f$IconProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconProvider"], {
                        icons: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconLibrary"],
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/Providers.tsx",
                        lineNumber: 51,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Providers.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Providers.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Providers.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Providers.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScrollToHash.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollToHash",
    ()=>ScrollToHash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ScrollToHash() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToHash.useEffect": ()=>{
            // Get the hash from the URL
            const hash = window.location.hash;
            if (hash) {
                // Remove the '#' symbol
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        }
    }["ScrollToHash.useEffect"], [
        router
    ]);
    return null;
}
_s(ScrollToHash, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ScrollToHash;
var _c;
__turbopack_context__.k.register(_c, "ScrollToHash");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__486dddcf._.js.map