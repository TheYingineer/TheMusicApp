import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches({ state, setState }) {
    return (
        <div>
            <Switch {...label} value={state} onChange={() => { setState(!state) }} />
        </div>
    );
}
