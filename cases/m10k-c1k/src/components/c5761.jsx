import React from 'react';
const LABEL_5761 = 'component_5761';
export function Component5761({ value = 5761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5761, 'data-value': derived.doubled }, children);
}
export default Component5761;
