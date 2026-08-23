import React from 'react';
const LABEL_45756 = 'component_45756';
export function Component45756({ value = 45756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45756, 'data-value': derived.doubled }, children);
}
export default Component45756;
