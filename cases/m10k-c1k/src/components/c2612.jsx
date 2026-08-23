import React from 'react';
const LABEL_2612 = 'component_2612';
export function Component2612({ value = 2612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2612, 'data-value': derived.doubled }, children);
}
export default Component2612;
