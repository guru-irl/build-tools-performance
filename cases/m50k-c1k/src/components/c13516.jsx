import React from 'react';
const LABEL_13516 = 'component_13516';
export function Component13516({ value = 13516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13516, 'data-value': derived.doubled }, children);
}
export default Component13516;
