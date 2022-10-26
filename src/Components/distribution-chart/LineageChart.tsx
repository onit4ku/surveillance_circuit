import React from 'react';
import { Box } from '@mui/material';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import * as d3 from 'd3';


const colours = [
    // "#003f5c", "#2f4b7c", "#665191", "#a05195", "#d45087", "#f95d6a", "#ff7c43", "#ffa600"
    // "#440154FF", "#482173FF", "#433E85FF", "#38598CFF", "#2D708EFF", "#25858EFF", "#1E9B8AFF", "#2BB07FFF", "#51C56AFF", "#85D54AFF", "#C2DF23FF", "#FDE725FF", "grey"
    "#000004FF", "#120D32FF", "#331068FF", "#5A167EFF", "#7D2482FF", "#A3307EFF", "#C83E73FF", "#E95562FF", "#F97C5DFF", "#FEA873FF", "#FED395FF", "grey",
];


function tooltipFormatter(value: number, name: string, props: any) {
    return value.toFixed(2);
}


function tooltipLabelFormatter(label: any) {
    return !!label ? <strong>{new Date(label).toISOString().slice(0, 7)}</strong> : <></>;
}


interface IProps {
    data: any;
}


function LineageChart(props: IProps) {
    const { data } = props;
    const lineages = Object.keys(data[0]).filter(key => key !== "date");
    const dates = data.map((d: any) => d.date);

    const margin = {
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
    };
    const legendMargin = {
        top: 0,
        right: 10,
        left: 10,
        bottom: 0,
    };
    const legendWrapperStyle = {
        paddingLeft: "1em"
    };

    return (
        <Box paddingTop={3}>
            <ResponsiveContainer width="100%" aspect={2}>
                <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tickFormatter={d3.timeFormat('%b\'%y')} tick={{ fontSize: "1.5rem" }} />
                    <YAxis domain={[0, 1]} ticks={[0, 0.25, 0.5, 0.75, 1]} tick={{ fontSize: "1.5rem" }} />
                    <Tooltip formatter={tooltipFormatter} labelFormatter={tooltipLabelFormatter} />
                    <Legend layout="vertical" align="right" verticalAlign="middle" wrapperStyle={legendWrapperStyle} iconType="circle" />
                    {lineages.map((lineage: string, idx: number) => (<Area key={lineage} type="monotoneX" dataKey={lineage} stackId="1" stroke={colours[idx % colours.length]} fill={colours[idx % colours.length]} />))}
                </AreaChart>
            </ResponsiveContainer>
        </Box >
    );
}


export default LineageChart;
