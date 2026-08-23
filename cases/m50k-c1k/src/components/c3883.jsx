import React from 'react';
const LABEL_3883 = 'component_3883';
export function Component3883({ value = 3883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3883, 'data-value': derived.doubled }, children);
}
export default Component3883;
