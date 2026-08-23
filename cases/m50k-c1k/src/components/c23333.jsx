import React from 'react';
const LABEL_23333 = 'component_23333';
export function Component23333({ value = 23333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23333, 'data-value': derived.doubled }, children);
}
export default Component23333;
