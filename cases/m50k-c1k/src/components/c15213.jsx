import React from 'react';
const LABEL_15213 = 'component_15213';
export function Component15213({ value = 15213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15213, 'data-value': derived.doubled }, children);
}
export default Component15213;
