export type Videos = {
    title: string,
    id: string,
    items: Items[]
}
type Items = {
    snippet: Snippet,
}
type ID = {
    videoId: string
}
type Snippet = {
    title: string,
    description: string,
    thumbnails: Thumbnails
}
type Thumbnails = {
    default: Default
}
type Default = {
    url: string
}

export type User = {
    name: string,
    videos: Videos[],
    libName: string
}