import React from "react";
import { DownOutlined } from '@ant-design/icons';
import { Space, Dropdown } from "antd";
import SearchInput from "../searchInput/searchInput";

import "./header.css";


export default function Header({currentMode, setCurrentMode, convertMode, setSearchValue}) {

    const items = [
        {
            key: '1',
            label: (
                <a rel="noopener noreferrer" href="##" onClick={() => setCurrentMode("now_playing")}>Now playing</a>
            )
        }, {
            key: '2',
            label: (
                <a rel="noopener noreferrer" href="##" onClick={() => setCurrentMode("popular")}>Popular</a>
            )
        }, {
            key: '3',
            label: (
                <a rel="noopener noreferrer" href="##" onClick={() => setCurrentMode("top_rated")}>Top rated</a>
            )
        }, {
            key: '45',
            label: (
                <a rel="noopener noreferrer" href="##" onClick={() => setCurrentMode("upcoming")}>Upcoming</a>
            )
        }
    ];


    return (
        <div className="header">
            <Dropdown menu={{items,}} >
                <a href="##" onClick={(e) => e.preventDefault()}>
                    <Space>
                        {convertMode(currentMode)}<DownOutlined />
                    </Space>
                </a>
            </Dropdown>
            <SearchInput setSearchValue={setSearchValue} />
        </div>
    );
}
