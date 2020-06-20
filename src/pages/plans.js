import React from "react";

import Layout from "../components/layout";

const Title = "Луховицы L324 План";

const Plan = props => (
    <>
        <div class="flex">
            <p class="item">{props.percent}</p>
            <h2 class="item">{props.name}</h2>
            <p class="item">{props.performance}</p>
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
    </>
)

const Content = (
    <>
        <div class="content">
            <div class="flex">
                <p>25%</p>
            </div>
        </div>
        
        <div class="content plans">
            <h1>Основные</h1>
            
            <Plan
                percent="100%"
                name="Товарный оборот"
                performance="150000/120000"
            />
        </div>
    </>
);

export default () => (
    <Layout headerText={Title} Content={Content} />
);