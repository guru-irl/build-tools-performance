import React from 'react';
const LABEL_2471 = 'component_2471';
export function Component2471({ value = 2471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2471, 'data-value': derived.doubled }, children);
}
export default Component2471;
