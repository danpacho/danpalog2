import type { ContactPlatformType } from "@core/contact"
import getAuthorContactHref from "@core/contact"

const contacts: Readonly<
    {
        [key in Exclude<ContactPlatformType, "email">]?: string
    } & {
        email: string // ✅ email for RSS
    }
> = {
    email: getAuthorContactHref("email", "danpa725@cau.ac.kr"),
    github: getAuthorContactHref("github", "danpacho"),
}
const author = {
    name: "단팥줘 노트",
    introduce:
        "안녕하세요 해달🦦과 떡볶이를 좋아하는 개발자입니다. 보고 배우면서 직접 느낀 삶의 경험들을 공유하는게 의도였지만 역시 삶은 의도대로 흘러가지 않더군요.",
    faviconUrl: "/favicon.ico",
    bannerImageUrl: "/banner.png",
    contacts,
} as const

const blog = {
    url: "https://danpacholog.vercel.app",
    siteName: "단팥줘 끄적끄적",
    subtitle: "프로필을 보시면 쑥쓰럽지만 오히려 좋아",
    copyright: `${
        author.name
    }© All rights reserved ${new Date().getFullYear()}.`,
    language: "ko",
    googleAnalyticsID: "G-3Q1R8QPN7D", // default to "DISABLED"
}

const config = {
    blogContentsDirectoryName: "blog", // blog contents directory name
    useKatex: false, // katex option
    postPerCategoryPage: 8,
    numberOfLatestPost: 4,
    numberOfMainPageCategory: 5,
    themeColor: "#73d1d7",
    postControllerText: {
        first: (category: string) => `${category}로 돌아가기`, // first post ➡️ no prev post, so replace with your text
        last: (category: string) => `${category}의 마지막 콘텐츠`, // last post ➡️ no next post, so replace with your text
    },
    navigationMenu: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Category",
            path: "/category",
        },
        {
            name: "Profile",
            path: "/profile",
        },
    ],
    author,
    ...blog,
} as const

export type BlogInfoType = typeof blog
export type AuthorInfoType = typeof author
export type ConfigType = typeof config

export { config }
