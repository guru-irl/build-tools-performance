import React from 'react';
const LABEL_32878 = 'component_32878';
export function Component32878({ value = 32878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32878, 'data-value': derived.doubled }, children);
}
export default Component32878;
