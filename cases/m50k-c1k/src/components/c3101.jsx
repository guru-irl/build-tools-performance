import React from 'react';
const LABEL_3101 = 'component_3101';
export function Component3101({ value = 3101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3101, 'data-value': derived.doubled }, children);
}
export default Component3101;
