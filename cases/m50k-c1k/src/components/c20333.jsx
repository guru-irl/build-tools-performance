import React from 'react';
const LABEL_20333 = 'component_20333';
export function Component20333({ value = 20333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20333, 'data-value': derived.doubled }, children);
}
export default Component20333;
