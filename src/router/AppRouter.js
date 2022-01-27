import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { APP_FOLDER_NAME } from "../globals/globals";
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageSingleMovie from '../pages/PageSingleMovie';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavs from '../pages/PageFavs';
import PageSearch from '../pages/PageSearch';

function AppRouter() {
    return (
        <BrowserRouter >
            <div className="wrapper">
                <Header />
                    <Routes>
                        <Route path="/" element={<PageHome sort="popular" />} />
                        <Route path="/sort/popular" element={<PageHome sort="popular" />} />
                        <Route path="/sort/top-rated" element={<PageHome sort="top_rated" />} />
                        <Route path="/sort/now-playing" element={<PageHome sort="now_playing" />} />
                        <Route path="/sort/upcoming" element={<PageHome sort="upcoming" />} />
                        <Route path="/movie/:id" element={<PageSingleMovie />} />
                        <Route path="about" element={<PageAbout />} />
                        <Route path="favs" element={<PageFavs />} />
                        <Route path="search" element={<PageSearch />}/>
                    </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;