import React from 'react';
const LABEL_1046 = 'component_1046';
export function Component1046({ value = 1046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1046, 'data-value': derived.doubled }, children);
}
export default Component1046;
