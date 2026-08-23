import React from 'react';
const LABEL_23542 = 'component_23542';
export function Component23542({ value = 23542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23542, 'data-value': derived.doubled }, children);
}
export default Component23542;
