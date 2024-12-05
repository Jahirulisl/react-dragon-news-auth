import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";
import Card from "./Card";

const NewsDetails = () => {
    const data=useLoaderData();
    const news =data.data[0];
    console.log(news); 
    return (
        <div>
            <header>
               <Header></Header>  
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">

            <section className="col-span-9">
                <h2 className="font-semibold mb-4">Dragon News</h2>
                <Card></Card>
            </section>
             <aside className="col-span-3">
                <RightNav></RightNav>
            </aside>

            </main>
        </div>
    );
};

export default NewsDetails;