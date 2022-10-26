import React, { useCallback, useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import selectedRegionState from './selectedRegionState';


function RegionSelector() {
    const [region, setRegion] = useRecoilState(selectedRegionState);
    const onSelect = useCallback((k: any) => { setRegion(k as unknown as string); }, [setRegion]);
    return (
        <Tabs className="TabsRegion" activeKey={region} onSelect={onSelect} fill>
            <Tab eventKey="andalucia" title="Andalucía" />
            <Tab eventKey="almeria" title="Almería" />
            <Tab eventKey="cadiz" title="Cádiz" />
            <Tab eventKey="cordoba" title="Córdoba" />
            <Tab eventKey="granada" title="Granada" />
            <Tab eventKey="huelva" title="Huelva" />
            <Tab eventKey="jaen" title="Jaén" />
            <Tab eventKey="malaga" title="Málaga" />
            <Tab eventKey="sevilla" title="Sevilla" />
        </Tabs>
    );
}



export default RegionSelector;