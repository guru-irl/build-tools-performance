import React from 'react';
const LABEL_21369 = 'component_21369';
export function Component21369({ value = 21369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21369, 'data-value': derived.doubled }, children);
}
export default Component21369;
