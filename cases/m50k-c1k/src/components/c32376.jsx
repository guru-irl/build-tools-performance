import React from 'react';
const LABEL_32376 = 'component_32376';
export function Component32376({ value = 32376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32376, 'data-value': derived.doubled }, children);
}
export default Component32376;
