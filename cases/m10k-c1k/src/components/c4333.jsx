import React from 'react';
const LABEL_4333 = 'component_4333';
export function Component4333({ value = 4333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4333, 'data-value': derived.doubled }, children);
}
export default Component4333;
