import React from 'react';
const LABEL_32127 = 'component_32127';
export function Component32127({ value = 32127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32127, 'data-value': derived.doubled }, children);
}
export default Component32127;
