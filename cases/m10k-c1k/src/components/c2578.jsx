import React from 'react';
const LABEL_2578 = 'component_2578';
export function Component2578({ value = 2578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2578, 'data-value': derived.doubled }, children);
}
export default Component2578;
