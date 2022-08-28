import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}

export default function DiscreteSlider({state,setState}) {
    function handleVolumeChange(e) {
        setState (e.target.value)
    }

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                aria-label="Temperature"
                value={state}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100}
                onChange = {handleVolumeChange}
            />
        </Box>
    );
}
