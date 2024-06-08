import React, { useEffect, useRef} from 'react';
import * as d3 from './d3';

const HelloWorld = () => {

    // code du composant
    const svgRef = useRef(null);

    useEffect(()=>{
        // Code pour afficher le message
        const svg = d3.select(svgRef.current);

        const text = svg.append('text')
            .attr('x', 50)
            .attr('y', 50)
            .attr('font-size',20)
            .attr('font-weight','bold')
            .text('Hello World')
    }, []);



    return (
        <svg ref = {svgRef} width = "100%" height = "100%">
            {/*Le message sera ajouté ici par d3.js*/}
        </svg>
    );
};

export default HelloWorld;