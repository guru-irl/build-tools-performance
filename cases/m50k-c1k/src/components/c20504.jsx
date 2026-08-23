import React from 'react';
const LABEL_20504 = 'component_20504';
export function Component20504({ value = 20504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20504, 'data-value': derived.doubled }, children);
}
export default Component20504;
