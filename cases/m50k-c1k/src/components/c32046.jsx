import React from 'react';
const LABEL_32046 = 'component_32046';
export function Component32046({ value = 32046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32046, 'data-value': derived.doubled }, children);
}
export default Component32046;
