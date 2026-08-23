import React from 'react';
const LABEL_21233 = 'component_21233';
export function Component21233({ value = 21233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21233, 'data-value': derived.doubled }, children);
}
export default Component21233;
