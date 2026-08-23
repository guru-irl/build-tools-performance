import React from 'react';
const LABEL_29333 = 'component_29333';
export function Component29333({ value = 29333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29333, 'data-value': derived.doubled }, children);
}
export default Component29333;
