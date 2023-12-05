'use client'
import React from 'react';

export const useOnScreen = (ref: React.RefObject<HTMLDivElement> | null, threshold = 1, shouldUnobserve = false) => {
    const [isIntersecting, setIntersecting] = React.useState(false);
    const [root, setRoot] = React.useState(null);

    const observer =
        typeof IntersectionObserver !== 'undefined'
            ? new IntersectionObserver(
                  ([entry]) => {
                      setIntersecting(entry.isIntersecting);
                      if (entry.isIntersecting && shouldUnobserve) {
                          unobserveItem(entry.target);
                      }
                  },
                  { root, threshold }
              )
            : null;

    React.useEffect(() => {
        if (observer && ref?.current) {
            observer.observe(ref.current);
            return () => {
                observer.disconnect();
            };
        }
    }, [root, ref?.current]);

    const unobserveItem = (target: Element) => {
        observer?.unobserve(target);
    };

    return [isIntersecting, setRoot] as const;
};

export const useOnScreenWithoutRenderUpdate = (ref: React.MutableRefObject<HTMLDivElement | null>, callbacksRef: { incomingCallback: any; outgoingCallback?: any }, threshold = 1, shouldUnobserve = false) => {
    const [root, setRoot] = React.useState(null);

    const observer =
        typeof IntersectionObserver !== 'undefined'
            ? new IntersectionObserver(
                  ([entry]) => {
                      if (entry.isIntersecting) {
                          callbacksRef?.incomingCallback?.current?.();
                      } else {
                          callbacksRef?.outgoingCallback?.current?.();
                      }
                      if (entry.isIntersecting && shouldUnobserve) {
                          unobserveItem(entry.target);
                      }
                  },
                  { root, threshold }
              )
            : null;

    React.useEffect(() => {
        if (observer && ref?.current) {
            observer.observe(ref.current);
            return () => {
                observer.disconnect();
            };
        }
    }, [root, ref?.current]);

    const unobserveItem = (target: Element) => {
        observer?.unobserve(target);
    };

    return [setRoot];
};
