import React from 'react';
const LABEL_40333 = 'component_40333';
export function Component40333({ value = 40333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40333, 'data-value': derived.doubled }, children);
}
export default Component40333;
