import React from 'react';
const LABEL_15197 = 'component_15197';
export function Component15197({ value = 15197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15197, 'data-value': derived.doubled }, children);
}
export default Component15197;
