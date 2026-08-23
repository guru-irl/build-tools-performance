import React from 'react';
const LABEL_12767 = 'component_12767';
export function Component12767({ value = 12767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12767, 'data-value': derived.doubled }, children);
}
export default Component12767;
