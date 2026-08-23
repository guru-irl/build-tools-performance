import React from 'react';
const LABEL_37650 = 'component_37650';
export function Component37650({ value = 37650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37650, 'data-value': derived.doubled }, children);
}
export default Component37650;
