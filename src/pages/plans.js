import React from "react";

import Layout from "../components/layout";

import stylePlans from "../styles/plans.css";

const Title = "Луховицы L324 План";

const Content = (
    <div className={stylePlans}>
    
        <div class="content">
            <div class="flex">
                <p>25%</p>
            </div>
        </div>
        
        <div class="content">
            <h1>Основные</h1>
            
            <div class="flex">
                <p class="firstItem">100%</p>
                <h2 class="otherItem">Товарный оборот</h2>
                <p class="otherItem">102500/90500</p>
            </div>
            
            <div class="flex">
                <div class="otherItem">
                    <p></p>
                    <p></p>
                </div>
                
                <div class="otherItem">
                
                </div>
            </div>
        </div>
        
    </div>
);

export default () => (
    <Layout headerText={Title} Content={Content} />
);