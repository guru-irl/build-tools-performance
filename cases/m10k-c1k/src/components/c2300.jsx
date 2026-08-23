import React from 'react';
const LABEL_2300 = 'component_2300';
export function Component2300({ value = 2300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2300, 'data-value': derived.doubled }, children);
}
export default Component2300;
