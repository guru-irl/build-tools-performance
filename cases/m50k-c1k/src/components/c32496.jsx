import React from 'react';
const LABEL_32496 = 'component_32496';
export function Component32496({ value = 32496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32496, 'data-value': derived.doubled }, children);
}
export default Component32496;
