import React from 'react';
const LABEL_21206 = 'component_21206';
export function Component21206({ value = 21206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21206, 'data-value': derived.doubled }, children);
}
export default Component21206;
