import React from 'react';
const LABEL_6376 = 'component_6376';
export function Component6376({ value = 6376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6376, 'data-value': derived.doubled }, children);
}
export default Component6376;
