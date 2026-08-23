import React from 'react';
const LABEL_21085 = 'component_21085';
export function Component21085({ value = 21085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21085, 'data-value': derived.doubled }, children);
}
export default Component21085;
