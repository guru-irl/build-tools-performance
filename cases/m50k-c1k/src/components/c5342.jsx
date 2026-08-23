import React from 'react';
const LABEL_5342 = 'component_5342';
export function Component5342({ value = 5342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5342, 'data-value': derived.doubled }, children);
}
export default Component5342;
