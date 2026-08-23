import React from 'react';
const LABEL_12616 = 'component_12616';
export function Component12616({ value = 12616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12616, 'data-value': derived.doubled }, children);
}
export default Component12616;
