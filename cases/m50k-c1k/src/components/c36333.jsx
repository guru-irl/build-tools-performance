import React from 'react';
const LABEL_36333 = 'component_36333';
export function Component36333({ value = 36333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36333, 'data-value': derived.doubled }, children);
}
export default Component36333;
