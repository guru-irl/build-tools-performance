import React from 'react';
const LABEL_15678 = 'component_15678';
export function Component15678({ value = 15678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15678, 'data-value': derived.doubled }, children);
}
export default Component15678;
