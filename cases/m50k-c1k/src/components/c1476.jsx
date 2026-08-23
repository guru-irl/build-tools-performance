import React from 'react';
const LABEL_1476 = 'component_1476';
export function Component1476({ value = 1476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1476, 'data-value': derived.doubled }, children);
}
export default Component1476;
