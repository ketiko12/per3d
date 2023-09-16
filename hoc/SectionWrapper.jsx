import {motion} from 'framer-motion';
import {styles} from '../src/styles';
import {staggerContainer} from '../src/utils/motion';

const SectionWrapper=(Component, idName)=>{
    function HOC(){
        returun(
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once:true, amount:0.25}}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
            <span className="hash-span" id={idName}>
              &npsp;
            </span>
           


            <Component/>
        </motion.section>
        )
    }
}
export default SectionWrapper