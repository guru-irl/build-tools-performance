import React from 'react';
const LABEL_13113 = 'component_13113';
export function Component13113({ value = 13113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13113, 'data-value': derived.doubled }, children);
}
export default Component13113;
