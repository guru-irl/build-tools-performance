import React from 'react';
const LABEL_29252 = 'component_29252';
export function Component29252({ value = 29252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29252, 'data-value': derived.doubled }, children);
}
export default Component29252;
