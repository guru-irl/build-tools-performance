import React from 'react';
const LABEL_45333 = 'component_45333';
export function Component45333({ value = 45333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45333, 'data-value': derived.doubled }, children);
}
export default Component45333;
