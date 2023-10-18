import RootLayout from "@/components/Layouts/RootLayout";

const NewsDetailsPage = ({news}) => {
    return (
        <div>
            <h1>{news?.title}</h1>
            <h3>{news?.description}</h3>
        </div>
    );
};

export default NewsDetailsPage;

NewsDetailsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
  

// for dynamic route 
export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:5000/news")
    const newses = await res.json();


    const paths = newses.map((news)=>({
        params: {newsId: news.id},
    }));


    return {
        paths, 
        fallback: false
    }
}



export const getStaticProps = async (context) =>{

    const {params} = context;

    const res = await fetch(`http://localhost:5000/news/${params.newsId}`)
    const data = await res.json();

    console.log(data)

    return {
        props: {
            news: data
        },
    }
}