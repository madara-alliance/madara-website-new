"use client"
import mixpanel, { OverridedMixpanel } from "mixpanel-browser";

mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN as string, {
  debug: true,
  ignore_dnt: true,
  track_pageview: true,
  persistence: "localStorage",
});


export const trackEvent = (eventName: string, eventParams?: Object) => {
  console.log('tracking>', eventName, eventParams);
  
  let eventData = {};
  if (eventParams) {
    eventData = {
      ...eventParams,
    };
  }

  mixpanel.track(eventName, eventData);
};

export const trackLinks = (
  eventName: string,
  eventParams: string,
  useAppProject?: boolean
) => {
  mixpanel.track_links(eventParams, eventName, {
    referrer: window.document.referrer,
  });
};

type ExtendedOverridedMixpanel = OverridedMixpanel & {
  app: OverridedMixpanel;
};
