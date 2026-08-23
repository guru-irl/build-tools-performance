import React from 'react';
const LABEL_39838 = 'component_39838';
export function Component39838({ value = 39838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39838, 'data-value': derived.doubled }, children);
}
export default Component39838;
