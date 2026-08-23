import React from 'react';
const LABEL_22375 = 'component_22375';
export function Component22375({ value = 22375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22375, 'data-value': derived.doubled }, children);
}
export default Component22375;
