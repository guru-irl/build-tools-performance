import React from 'react';
const LABEL_1638 = 'component_1638';
export function Component1638({ value = 1638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1638, 'data-value': derived.doubled }, children);
}
export default Component1638;
