import React from 'react';
import CustomButton from './CustomButton';

const AiPicker = ({prompt, setPrompt, generatingImg, handleSubmit}) => {
    return (
        <div className='aipicker-container'>
           <textarea placeholder='Ask Ai..?' rows={5} value={prompt}
           onChange={(e)=> setPrompt(e.target.value )} className='aipicker-textarea'/>

           <div className='flex flex-wrap gap-3'>
            {generatingImg? (
                <CustomButton
                    type="outline"
                    title="Asking Ai.."
                    customStyles="text-xs"
                />
            ) : (
                <>
                    <CustomButton
                        type="outline"
                    title="Ai logo"
                        handleClick={() => handleSubmit('logo')}
                        customStyles="text-xs"
                    />
                    <CustomButton
                        type="filled"
                    title="Ai Full"
                        handleClick={() => handleSubmit('full')}
                        customStyles="text-xs"
                    />
                </>
            )}
           </div>
        </div>
    );
};

export default AiPicker;