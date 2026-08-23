import React from 'react';
const LABEL_33148 = 'component_33148';
export function Component33148({ value = 33148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33148, 'data-value': derived.doubled }, children);
}
export default Component33148;
