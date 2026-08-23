import React from 'react';
const LABEL_33182 = 'component_33182';
export function Component33182({ value = 33182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33182, 'data-value': derived.doubled }, children);
}
export default Component33182;
