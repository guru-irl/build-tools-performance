import React from 'react';
const LABEL_12653 = 'component_12653';
export function Component12653({ value = 12653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12653, 'data-value': derived.doubled }, children);
}
export default Component12653;
