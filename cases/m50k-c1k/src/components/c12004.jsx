import React from 'react';
const LABEL_12004 = 'component_12004';
export function Component12004({ value = 12004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12004, 'data-value': derived.doubled }, children);
}
export default Component12004;
