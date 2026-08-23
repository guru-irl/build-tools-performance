import React from 'react';
const LABEL_36273 = 'component_36273';
export function Component36273({ value = 36273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36273, 'data-value': derived.doubled }, children);
}
export default Component36273;
