import React from 'react';
const LABEL_31046 = 'component_31046';
export function Component31046({ value = 31046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31046, 'data-value': derived.doubled }, children);
}
export default Component31046;
