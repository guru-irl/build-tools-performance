import React from 'react';
const LABEL_39475 = 'component_39475';
export function Component39475({ value = 39475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39475, 'data-value': derived.doubled }, children);
}
export default Component39475;
