import React from 'react';
const LABEL_23375 = 'component_23375';
export function Component23375({ value = 23375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23375, 'data-value': derived.doubled }, children);
}
export default Component23375;
