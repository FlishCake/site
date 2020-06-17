import React from "react";

import Layout from "../components/layout";

import styleHomePage from "../../styles/homePage.css";

const Title = "Главная";

const Content = (
    <div className={styleHomePage}>
        <div class="content">
            <h1>Проекты</h1>
        
            <div class="project">
                <h2>Проект</h2>
                <p>Описание проекта</p>
            </div>
        
            <div class="project">
                <h2>Проект</h2>
                <p>Описание проекта</p>
            </div>
        
        </div>
    
        <div class="content">
            <h1>Записи</h1>
        
            <div>
                <h2>Записть</h2>
                <p>Краткое описание</p>
            </div>
        
            <div>
                <h2>Запись</h2>
                <p>Краткое описание</p>
            </div>
        </div>
    </div>
);

export default () => (
  <Layout headerText={Title} Content={Content} />
);
