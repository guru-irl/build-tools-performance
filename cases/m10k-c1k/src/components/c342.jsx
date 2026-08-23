import React from 'react';
const LABEL_342 = 'component_342';
export function Component342({ value = 342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_342, 'data-value': derived.doubled }, children);
}
export default Component342;
