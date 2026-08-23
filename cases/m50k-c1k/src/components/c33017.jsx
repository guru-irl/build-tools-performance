import React from 'react';
const LABEL_33017 = 'component_33017';
export function Component33017({ value = 33017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33017, 'data-value': derived.doubled }, children);
}
export default Component33017;
