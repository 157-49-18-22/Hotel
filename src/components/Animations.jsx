import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Animation variants for different types of animations
export const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

// Hook for scroll-triggered animations
export const useScrollAnimation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-100px 0px -100px 0px"
    });

    return { ref, isInView };
};

// Animated Section Component
export const AnimatedSection = ({
    children,
    className = "",
    variant = fadeInUp,
    delay = 0,
    ...props
}) => {
    const { ref, isInView } = useScrollAnimation();

    return (
        <motion.section
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variant}
            transition={{ delay }}
            {...props}
        >
            {children}
        </motion.section>
    );
};

// Animated Div Component
export const AnimatedDiv = ({
    children,
    className = "",
    variant = fadeInUp,
    delay = 0,
    ...props
}) => {
    const { ref, isInView } = useScrollAnimation();

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variant}
            transition={{ delay }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Animated Card Component
export const AnimatedCard = ({
    children,
    className = "",
    variant = scaleIn,
    delay = 0,
    ...props
}) => {
    const { ref, isInView } = useScrollAnimation();

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variant}
            transition={{ delay }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Animated Title Component
export const AnimatedTitle = ({
    children,
    className = "",
    variant = fadeInUp,
    delay = 0,
    ...props
}) => {
    const { ref, isInView } = useScrollAnimation();

    return (
        <motion.h2
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variant}
            transition={{ delay }}
            {...props}
        >
            {children}
        </motion.h2>
    );
};

// Animated Text Component
export const AnimatedText = ({
    children,
    className = "",
    variant = fadeInUp,
    delay = 0,
    ...props
}) => {
    const { ref, isInView } = useScrollAnimation();

    return (
        <motion.p
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variant}
            transition={{ delay }}
            {...props}
        >
            {children}
        </motion.p>
    );
};

// Staggered Animation Container
export const StaggeredContainer = ({
    children,
    className = "",
    ...props
}) => {
    const { ref, isInView } = useScrollAnimation();

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Staggered Item Component
export const StaggeredItem = ({
    children,
    className = "",
    variant = fadeInUp,
    ...props
}) => {
    return (
        <motion.div
            className={className}
            variants={variant}
            {...props}
        >
            {children}
        </motion.div>
    );
};
