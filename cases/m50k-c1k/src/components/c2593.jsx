import React from 'react';
const LABEL_2593 = 'component_2593';
export function Component2593({ value = 2593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2593, 'data-value': derived.doubled }, children);
}
export default Component2593;
