import React from 'react';
const LABEL_2206 = 'component_2206';
export function Component2206({ value = 2206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2206, 'data-value': derived.doubled }, children);
}
export default Component2206;
