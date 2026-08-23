import React from 'react';
const LABEL_2732 = 'component_2732';
export function Component2732({ value = 2732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2732, 'data-value': derived.doubled }, children);
}
export default Component2732;
