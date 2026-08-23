import React from 'react';
const LABEL_32718 = 'component_32718';
export function Component32718({ value = 32718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32718, 'data-value': derived.doubled }, children);
}
export default Component32718;
