import React from "react";

import Layout from "../components/layout";

const Title = "Луховицы L324 План";

const Content = (
    <>
    
        <div class="content">
            <div class="flex">
                <p>25%</p>
            </div>
        </div>
        
        <div class="content plans">
            <h1>Основные</h1>
            
            <div class="flex">
                <p class="item">100%</p>
                <h2 class="item">Товарный оборот</h2>
                <p class="item">102500/90500</p>
            </div>
            
            <div class="flex">
                <div class="item">
                    <p>В день: 10000</p>
                </div>
                
                <div class="item">
                    <p>До 100%: 20000</p>
                </div>
                
                <div class="item">
                    <p>Осталось: 100000</p>
                </div>
            </div>
        </div>
        
    </>
);

export default () => (
    <Layout headerText={Title} Content={Content} />
);