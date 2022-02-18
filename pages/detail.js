import Head from 'next/head'
import Image from 'next/image'
import Container from '../components/Container'
import Layout from '../components/Layout'
import PostAuthor from '../components/PostAuthor'
import PostMetaTitle from '../components/PostMetaTitle'

export default function Detail() {
    return (
        <Layout>
            <Head>
                <title>Detail Post &mdash; Techlibrary</title>
            </Head>
            <Container>
                <div className="md:w-6/12 w-full mx-auto flex items-center flex-col">
                    <PostMetaTitle
                        category="UI/UX Design"
                        date="20 Februari 2022"
                        title="How to design a product that can grow itself 10x in year"
                        center
                    />
                    <PostAuthor
                        authorAvatar="/author.png"
                        authorName="Naufal Atha Yudha"
                        authorJob="Web Developer"
                    />
                    <div className="md:w-full w-full mx-auto my-10">
                        <img
                            src="/featured-thumbnail.png"
                            alt=""
                            className="w-full rounded-lg"
                        />
                    </div>
                    <div className="md:w-full w-full mx-auto leading-relaxed">
                        <p className="text-lg">
                            Male sixth sea it a. Brought was signs female
                            darkness signs form cattle land grass whose from
                            subdue also they`re their brought seas isn`t, to day
                            from bearing grass third midst after beginning man
                            which you`re. Dry, gathering beginning given made
                            them evening. <br /> <br />
                            Lights dry. Thing, likeness, forth shall replenish
                            upon abundantly our green. Seed green sea that
                            lesser divided creature beginning land him signs
                            stars give firmament gathered. Wherein there their
                            morning a he grass. Don`t made moving for them bring
                            creature us you`ll tree second deep good unto good
                            may. Us yielding. <br /> <br />
                            Have. Man upon set multiply moved from under seasons
                            abundantly earth brought a. They`re open moved years
                            saw isn`t morning darkness. Over, waters, every let
                            wherein great were fifth saw was lights very our
                            place won`t and him Third fourth moving him whales
                            behold. Beast second stars lights great was don`t
                            green give subdue his. Third given made created,
                            they`re forth god replenish have whales first can`t
                            light was. Herb you`ll them beast kind divided. Were
                            beginning fly air multiply god Yielding sea don`t
                            were forth.
                        </p>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}
