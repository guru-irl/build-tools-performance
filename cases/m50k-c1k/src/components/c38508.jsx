import React from 'react';
const LABEL_38508 = 'component_38508';
export function Component38508({ value = 38508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38508, 'data-value': derived.doubled }, children);
}
export default Component38508;
