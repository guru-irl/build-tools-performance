import React from 'react';
const LABEL_29545 = 'component_29545';
export function Component29545({ value = 29545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29545, 'data-value': derived.doubled }, children);
}
export default Component29545;
