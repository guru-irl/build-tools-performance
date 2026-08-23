import React from 'react';
const LABEL_15539 = 'component_15539';
export function Component15539({ value = 15539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15539, 'data-value': derived.doubled }, children);
}
export default Component15539;
