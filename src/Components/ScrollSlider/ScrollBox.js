import React, { useRef, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import './scrollBox.css';

const timing = (1 / 60) * 1000;
const decay = v => -0.1 * ((1 / timing) ^ 4) + v;

function ScrollBox({ children }) {
    const scrollWrapperRef = useRef();
    const [clickStartX, setClickStartX] = useState();
    const [scrollStartX, setScrollStartX] = useState();
    const [isDragging, setIsDragging] = useState(false);
    const [direction, setDirection] = useState(0);
    const [momentum, setMomentum] = useState(0);
    const [lastScrollX, setLastScrollX] = useState(0);
    const [speed, setSpeed] = useState(0);
    const handleLastScrollX = useCallback(
        throttle(screenX => {
            setLastScrollX(screenX);
        }, timing),
        []
    );const scrollWrapperCurrent = scrollWrapperRef.current;
    const handleMomentum = useCallback(
        throttle(nextMomentum => {
            setMomentum(nextMomentum);
            scrollWrapperRef.current.scrollLeft = scrollWrapperRef.current.scrollLeft + nextMomentum * timing * direction;
        }, timing),
        [scrollWrapperCurrent, direction]
    );

    useEffect(() => {
        if (direction !== 0) {
            if (momentum > 0.1 && !isDragging) {
                handleMomentum(decay(momentum));
            } else if (isDragging) {
                setMomentum(speed);
            } else {
                setDirection(0);
            }
        }
    }, [momentum, isDragging, speed, direction, handleMomentum]);

    useEffect(() => {
        if (scrollWrapperRef.current) {
            const handleDragStart = e => {
                setClickStartX(e.screenX);
                setScrollStartX(scrollWrapperRef.current.scrollLeft);
                setDirection(0);
            };
            const handleDragMove = e => {
                e.preventDefault();
                e.stopPropagation();

                if (clickStartX !== undefined && scrollStartX !== undefined) {
                    const touchDelta = clickStartX - e.screenX;
                    scrollWrapperRef.current.scrollLeft = scrollStartX + touchDelta;

                    if (Math.abs(touchDelta) > 1) {
                        setIsDragging(true);
                        setDirection(touchDelta / Math.abs(touchDelta));
                        setSpeed(Math.abs((lastScrollX - e.screenX) / timing));
                        handleLastScrollX(e.screenX);
                    }
                }
            };
            const handleDragEnd = () => {
                if (isDragging && clickStartX !== undefined) {
                    setClickStartX(undefined);
                    setScrollStartX(undefined);
                    setIsDragging(false);
                }
            };

            if (scrollWrapperRef.current.ontouchstart === undefined) {
                scrollWrapperRef.current.onmousedown = handleDragStart;
                scrollWrapperRef.current.onmousemove = handleDragMove;
                scrollWrapperRef.current.onmouseup = handleDragEnd;
                scrollWrapperRef.current.onmouseleave = handleDragEnd;
            }
        }
    }, [scrollWrapperCurrent, clickStartX, isDragging, scrollStartX, handleLastScrollX, lastScrollX]);

    return (
        <div className="scroll-box">
            <div className="scroll-box__wrapper" ref={scrollWrapperRef}>
                <div className="scroll-box__container" role="list" style={{ pointerEvents: isDragging ? 'none' : undefined }}>
                    {children.map((child, i) => (
                        <div role="listitem" key={`scroll-box-item-${i}`} className="scroll-box__item">
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

ScrollBox.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ScrollBox;