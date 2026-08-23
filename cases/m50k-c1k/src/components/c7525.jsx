import React from 'react';
const LABEL_7525 = 'component_7525';
export function Component7525({ value = 7525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7525, 'data-value': derived.doubled }, children);
}
export default Component7525;
