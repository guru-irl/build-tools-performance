import React from 'react';
const LABEL_1513 = 'component_1513';
export function Component1513({ value = 1513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1513, 'data-value': derived.doubled }, children);
}
export default Component1513;
