import React from 'react';
const LABEL_12047 = 'component_12047';
export function Component12047({ value = 12047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12047, 'data-value': derived.doubled }, children);
}
export default Component12047;
