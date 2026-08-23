import React from 'react';
const LABEL_13102 = 'component_13102';
export function Component13102({ value = 13102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13102, 'data-value': derived.doubled }, children);
}
export default Component13102;
