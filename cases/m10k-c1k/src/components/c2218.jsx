import React from 'react';
const LABEL_2218 = 'component_2218';
export function Component2218({ value = 2218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2218, 'data-value': derived.doubled }, children);
}
export default Component2218;
