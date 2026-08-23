import React from 'react';
const LABEL_45324 = 'component_45324';
export function Component45324({ value = 45324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45324, 'data-value': derived.doubled }, children);
}
export default Component45324;
