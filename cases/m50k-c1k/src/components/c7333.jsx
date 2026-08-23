import React from 'react';
const LABEL_7333 = 'component_7333';
export function Component7333({ value = 7333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7333, 'data-value': derived.doubled }, children);
}
export default Component7333;
