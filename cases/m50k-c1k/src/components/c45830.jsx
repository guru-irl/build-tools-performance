import React from 'react';
const LABEL_45830 = 'component_45830';
export function Component45830({ value = 45830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45830, 'data-value': derived.doubled }, children);
}
export default Component45830;
