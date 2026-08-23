import React from 'react';
const LABEL_3170 = 'component_3170';
export function Component3170({ value = 3170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3170, 'data-value': derived.doubled }, children);
}
export default Component3170;
