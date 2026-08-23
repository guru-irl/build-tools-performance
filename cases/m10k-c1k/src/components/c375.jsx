import React from 'react';
const LABEL_375 = 'component_375';
export function Component375({ value = 375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_375, 'data-value': derived.doubled }, children);
}
export default Component375;
