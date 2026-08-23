import React from 'react';
const LABEL_35432 = 'component_35432';
export function Component35432({ value = 35432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35432, 'data-value': derived.doubled }, children);
}
export default Component35432;
