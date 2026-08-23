import React from 'react';
const LABEL_22513 = 'component_22513';
export function Component22513({ value = 22513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22513, 'data-value': derived.doubled }, children);
}
export default Component22513;
