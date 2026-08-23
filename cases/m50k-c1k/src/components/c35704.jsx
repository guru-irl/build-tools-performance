import React from 'react';
const LABEL_35704 = 'component_35704';
export function Component35704({ value = 35704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35704, 'data-value': derived.doubled }, children);
}
export default Component35704;
