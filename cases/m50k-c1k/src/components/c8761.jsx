import React from 'react';
const LABEL_8761 = 'component_8761';
export function Component8761({ value = 8761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8761, 'data-value': derived.doubled }, children);
}
export default Component8761;
