import React from 'react';
const LABEL_12369 = 'component_12369';
export function Component12369({ value = 12369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12369, 'data-value': derived.doubled }, children);
}
export default Component12369;
