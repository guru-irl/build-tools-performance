import React from 'react';
const LABEL_22685 = 'component_22685';
export function Component22685({ value = 22685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22685, 'data-value': derived.doubled }, children);
}
export default Component22685;
