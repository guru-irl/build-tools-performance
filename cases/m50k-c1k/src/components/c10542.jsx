import React from 'react';
const LABEL_10542 = 'component_10542';
export function Component10542({ value = 10542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10542, 'data-value': derived.doubled }, children);
}
export default Component10542;
