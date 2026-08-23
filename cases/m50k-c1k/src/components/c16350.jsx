import React from 'react';
const LABEL_16350 = 'component_16350';
export function Component16350({ value = 16350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16350, 'data-value': derived.doubled }, children);
}
export default Component16350;
