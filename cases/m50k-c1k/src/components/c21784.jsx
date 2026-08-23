import React from 'react';
const LABEL_21784 = 'component_21784';
export function Component21784({ value = 21784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21784, 'data-value': derived.doubled }, children);
}
export default Component21784;
