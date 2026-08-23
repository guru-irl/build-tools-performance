import React from 'react';
const LABEL_21391 = 'component_21391';
export function Component21391({ value = 21391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21391, 'data-value': derived.doubled }, children);
}
export default Component21391;
