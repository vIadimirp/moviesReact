import React from "react";
import MovieList from "../movieList/movieList";
import { Pagination } from "antd"

import "./main.css";


export default function Main({movieItems, formatDate, currentPage, setCurrentPage, totalPages}) {

    return (
        <div className="main">
            <MovieList movieItems={movieItems} formatDate={formatDate} />
            <div className="main-pagination">
                Page <Pagination simple current={currentPage} defaultCurrent={1} total={totalPages} pageSize={20} onChange={page => setCurrentPage(page)} />
            </div>
        </div>
    );

}
