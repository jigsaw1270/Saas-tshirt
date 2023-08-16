import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../Components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
    const snap = useSnapshot(state);

    return (
       <AnimatePresence>
        {
            snap.intro && (
              <motion.section className='home' {
                ...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                   <img src="./threejs.png" alt="logo" className='object-contain w-8 h-8' /> 
                </motion.header>

                <motion.div className='home-content' {
                    ...headContainerAnimation
                }>
                <motion.div {...headTextAnimation}>
                <h1 className='head-text'>
                    LET'S <br className='"xl:block hidden' /> DO IT
                </h1>

                </motion.div>
                <motion.div {...headContainerAnimation}
                className='flex flex-col gap-5'>
                  <p className='max-w-md text-base font-normal text-gray-600'>Express yourself through clothing like never before with our cutting-edge T-shirt customization platform. Whether you're looking to showcase your unique style, promote your brand, commemorate an event, or simply stand out from the crowd, we're here to <strong> turn your vision into a wearable masterpiece....</strong> </p>

                  <CustomButton type="filled" title="Customize it "
                  handleClick={()=> state.intro=false}
                    customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                  ></CustomButton>
                </motion.div>

                </motion.div>

              </motion.section>  
            )
        }
       </AnimatePresence>
    );
};

export default Home;