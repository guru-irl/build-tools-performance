import React from 'react';
const LABEL_333 = 'component_333';
export function Component333({ value = 333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_333, 'data-value': derived.doubled }, children);
}
export default Component333;
