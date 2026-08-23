import React from 'react';
const LABEL_1369 = 'component_1369';
export function Component1369({ value = 1369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1369, 'data-value': derived.doubled }, children);
}
export default Component1369;
