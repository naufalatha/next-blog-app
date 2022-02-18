import Link from 'next/link'

export default function PostMetaTitle({ category, title, date, center }) {
    return (
        <>
            <div className="flex items-center text-white/60 space-x-4">
                <div className="uppercase">{category}</div>
                <span>&bull;</span>
                <div>{date}</div>
            </div>
            <h1
                className={`text-2xl mt-4 font-bold ${
                    center ? 'text-center' : ''
                }`}
            >
                <Link href="/detail">
                    <a>{title}</a>
                </Link>
            </h1>
        </>
    )
}
