import React from 'react';
const LABEL_22504 = 'component_22504';
export function Component22504({ value = 22504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22504, 'data-value': derived.doubled }, children);
}
export default Component22504;
