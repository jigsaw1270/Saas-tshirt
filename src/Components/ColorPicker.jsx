import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';
import state from '../store';

const ColorPicker = () => {
    const snap = useSnapshot(state);
    return (
        <div className='absolute ml-3 left-full'>
        <SketchPicker
            color={snap.color}
            disableAlpha
            presetColors={[
                "#2596be",
                "#6c25be",
                "#be4d25",
                "#be2596",
                "#134b5f",
                "#cb518a",
                "#721e16",
                "#25be38",
                "#14691f",
                "#b3be25",
                "#ecece0",
                "#141403"

            ]}
            onChange={(color) => state.color = color.hex}
        />
           
        </div>
    );
};

export default ColorPicker;