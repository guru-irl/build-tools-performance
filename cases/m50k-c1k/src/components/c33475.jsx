import React from 'react';
const LABEL_33475 = 'component_33475';
export function Component33475({ value = 33475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33475, 'data-value': derived.doubled }, children);
}
export default Component33475;
