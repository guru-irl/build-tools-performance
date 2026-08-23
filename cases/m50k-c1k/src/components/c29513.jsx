import React from 'react';
const LABEL_29513 = 'component_29513';
export function Component29513({ value = 29513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29513, 'data-value': derived.doubled }, children);
}
export default Component29513;
