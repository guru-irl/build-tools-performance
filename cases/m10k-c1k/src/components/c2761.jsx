import React from 'react';
const LABEL_2761 = 'component_2761';
export function Component2761({ value = 2761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2761, 'data-value': derived.doubled }, children);
}
export default Component2761;
