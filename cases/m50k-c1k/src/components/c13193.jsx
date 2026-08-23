import React from 'react';
const LABEL_13193 = 'component_13193';
export function Component13193({ value = 13193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13193, 'data-value': derived.doubled }, children);
}
export default Component13193;
