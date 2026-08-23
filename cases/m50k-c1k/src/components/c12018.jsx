import React from 'react';
const LABEL_12018 = 'component_12018';
export function Component12018({ value = 12018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12018, 'data-value': derived.doubled }, children);
}
export default Component12018;
