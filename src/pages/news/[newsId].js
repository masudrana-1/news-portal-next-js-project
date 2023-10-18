import RootLayout from "@/components/Layouts/RootLayout";

const NewsDetailsPage = () => {
    return (
        <div>
            <h1>This is news details page</h1>
        </div>
    );
};

export default NewsDetailsPage;

NewsDetailsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
  