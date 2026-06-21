import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_IMG_SRC_TYPES } from "react"

export type Post = {
    id: string
    title: string
    content: string
    topImage: string | null
    createdAt: Date
    author: {
        name: string
    }
}

export type PostCardProps = { post: Post }