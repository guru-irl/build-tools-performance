import React from 'react';
const LABEL_28516 = 'component_28516';
export function Component28516({ value = 28516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28516, 'data-value': derived.doubled }, children);
}
export default Component28516;
