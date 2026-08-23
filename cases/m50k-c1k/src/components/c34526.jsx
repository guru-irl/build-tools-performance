import React from 'react';
const LABEL_34526 = 'component_34526';
export function Component34526({ value = 34526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34526, 'data-value': derived.doubled }, children);
}
export default Component34526;
