import React from 'react';
const LABEL_33714 = 'component_33714';
export function Component33714({ value = 33714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33714, 'data-value': derived.doubled }, children);
}
export default Component33714;
