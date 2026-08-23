import React from 'react';
const LABEL_10350 = 'component_10350';
export function Component10350({ value = 10350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10350, 'data-value': derived.doubled }, children);
}
export default Component10350;
