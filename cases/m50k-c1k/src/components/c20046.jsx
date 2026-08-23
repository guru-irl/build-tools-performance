import React from 'react';
const LABEL_20046 = 'component_20046';
export function Component20046({ value = 20046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20046, 'data-value': derived.doubled }, children);
}
export default Component20046;
