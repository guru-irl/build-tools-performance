import React from 'react';
const LABEL_33830 = 'component_33830';
export function Component33830({ value = 33830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33830, 'data-value': derived.doubled }, children);
}
export default Component33830;
