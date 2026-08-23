import React from 'react';
const LABEL_42369 = 'component_42369';
export function Component42369({ value = 42369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42369, 'data-value': derived.doubled }, children);
}
export default Component42369;
