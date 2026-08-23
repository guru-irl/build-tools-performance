import React from 'react';
const LABEL_46350 = 'component_46350';
export function Component46350({ value = 46350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46350, 'data-value': derived.doubled }, children);
}
export default Component46350;
