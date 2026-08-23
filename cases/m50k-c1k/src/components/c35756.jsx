import React from 'react';
const LABEL_35756 = 'component_35756';
export function Component35756({ value = 35756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35756, 'data-value': derived.doubled }, children);
}
export default Component35756;
