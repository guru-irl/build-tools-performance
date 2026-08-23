import React from 'react';
const LABEL_1495 = 'component_1495';
export function Component1495({ value = 1495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1495, 'data-value': derived.doubled }, children);
}
export default Component1495;
