import React from 'react';
const LABEL_23369 = 'component_23369';
export function Component23369({ value = 23369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23369, 'data-value': derived.doubled }, children);
}
export default Component23369;
