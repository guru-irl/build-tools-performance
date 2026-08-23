import React from 'react';
const LABEL_23516 = 'component_23516';
export function Component23516({ value = 23516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23516, 'data-value': derived.doubled }, children);
}
export default Component23516;
