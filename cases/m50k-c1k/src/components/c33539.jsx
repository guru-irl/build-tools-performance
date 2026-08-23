import React from 'react';
const LABEL_33539 = 'component_33539';
export function Component33539({ value = 33539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33539, 'data-value': derived.doubled }, children);
}
export default Component33539;
