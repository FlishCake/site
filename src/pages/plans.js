import React from "react";

import Layout from "../components/layout";

const Title = "Луховицы L324 План";

const Plan = props => (
    <>
        <div class="flex">
            <p class="item">100%</p>
            <h2 class="item">{props.name}</h2>
            <p class="item">100000/100000</p>
        </div>
        <div class="flex">
            <p class="item">В день: 10000</p>
            <p class="item">До 100%: 20000</p>
            <p class="item">Осталось: 100000</p>
        </div>
    </>
)

const Content = (
    <>
        <div class="content">
            <div class="flex">
                <p></p>
            </div>
        </div>
        
        <div class="content plans">
            <h1>Основные</h1>
            <Plan name="Товарный оборот"/>
            <br/>
            <Plan name="Аксессуары"/>
            <br/>
            <Plan name="Доп. оборот"/>
            <br/>
            
            <div class="contentBlack plans">
                <Plan name="Настройки"/>
                <br/>
                <Plan name="ДСО"/>
            </div>
            
            <br/>
            <Plan name="Кредиты"/>
        </div>
        
        <div class="content plans">
            <h1>ОСС</h1>
            <Plan name="Билайн"/>
            <br/>
            <Plan name="Мегафон"/>
            <br/>
            <Plan name="МТС"/>
            <br/>
            <Plan name="Yota"/>
        </div>
    </>
);

export default () => (
    <Layout headerText={Title} Content={Content} />
);