import React from 'react';
const LABEL_1453 = 'component_1453';
export function Component1453({ value = 1453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1453, 'data-value': derived.doubled }, children);
}
export default Component1453;
