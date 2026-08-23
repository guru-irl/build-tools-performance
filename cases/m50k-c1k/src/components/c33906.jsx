import React from 'react';
const LABEL_33906 = 'component_33906';
export function Component33906({ value = 33906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33906, 'data-value': derived.doubled }, children);
}
export default Component33906;
