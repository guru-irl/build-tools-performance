import React from 'react';
const LABEL_13163 = 'component_13163';
export function Component13163({ value = 13163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13163, 'data-value': derived.doubled }, children);
}
export default Component13163;
