import React from 'react';
const LABEL_2296 = 'component_2296';
export function Component2296({ value = 2296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2296, 'data-value': derived.doubled }, children);
}
export default Component2296;
