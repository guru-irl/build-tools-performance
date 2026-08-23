import React from 'react';
const LABEL_10333 = 'component_10333';
export function Component10333({ value = 10333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10333, 'data-value': derived.doubled }, children);
}
export default Component10333;
