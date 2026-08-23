import React from 'react';
const LABEL_21271 = 'component_21271';
export function Component21271({ value = 21271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21271, 'data-value': derived.doubled }, children);
}
export default Component21271;
