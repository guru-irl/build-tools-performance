import React from 'react';
const LABEL_17328 = 'component_17328';
export function Component17328({ value = 17328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17328, 'data-value': derived.doubled }, children);
}
export default Component17328;
