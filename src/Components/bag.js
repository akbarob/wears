import {motion} from 'framer-motion'

export default function Bag(){
    return(
        <motion.div className="text-center mt-5 brand" style={{height:"70vh"}}
        initial={{opacity:0,  }}
            animate={{opacity:1, x: 0, transition:{delay: .5 }}}>
            <h4>You have 0 item(s) in your bag</h4>
            Sign in to see your bag
and get shopping!
        </motion.div>
    )
}