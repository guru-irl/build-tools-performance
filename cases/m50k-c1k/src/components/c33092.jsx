import React from 'react';
const LABEL_33092 = 'component_33092';
export function Component33092({ value = 33092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33092, 'data-value': derived.doubled }, children);
}
export default Component33092;
