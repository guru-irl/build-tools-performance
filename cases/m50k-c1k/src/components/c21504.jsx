import React from 'react';
const LABEL_21504 = 'component_21504';
export function Component21504({ value = 21504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21504, 'data-value': derived.doubled }, children);
}
export default Component21504;
