import PostMetaTitle from '../components/PostMetaTitle'
import PostAuthor from '../components/PostAuthor'

export default function InfoPost({
    category,
    date,
    title,
    shortDescription,
    authorAvatar,
    authorName,
    authorJob,
}) {
    return (
        <>
            <PostMetaTitle category={category} title={title} date={date} />
            <p className="mt-5 text-white/60 w-10/12">{shortDescription}</p>
            <PostAuthor
                authorAvatar={authorAvatar}
                authorName={authorName}
                authorJob={authorJob}
            />
        </>
    )
}
