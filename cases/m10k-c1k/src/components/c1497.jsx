import React from 'react';
const LABEL_1497 = 'component_1497';
export function Component1497({ value = 1497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1497, 'data-value': derived.doubled }, children);
}
export default Component1497;
