import React from 'react';
const LABEL_1491 = 'component_1491';
export function Component1491({ value = 1491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1491, 'data-value': derived.doubled }, children);
}
export default Component1491;
