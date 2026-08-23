import React from 'react';
const LABEL_22249 = 'component_22249';
export function Component22249({ value = 22249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22249, 'data-value': derived.doubled }, children);
}
export default Component22249;
