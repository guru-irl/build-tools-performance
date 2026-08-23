import React from 'react';
const LABEL_33213 = 'component_33213';
export function Component33213({ value = 33213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33213, 'data-value': derived.doubled }, children);
}
export default Component33213;
