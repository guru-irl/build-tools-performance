import React from 'react';
const LABEL_1350 = 'component_1350';
export function Component1350({ value = 1350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1350, 'data-value': derived.doubled }, children);
}
export default Component1350;
