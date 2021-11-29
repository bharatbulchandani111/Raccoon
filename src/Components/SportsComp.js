import React from 'react';
import Sports from './Sports';
import foot from '../JSON Files/football.json';
import crick from '../JSON Files/cricket.json';
const SportsComp = () => {
    return(
        <div>
            <Sports title="Football" width="420" height="350" data={foot} />
            <Sports title="Cricket" width="420" height="350" data={crick} />
        </div>
    )
}

export default SportsComp;