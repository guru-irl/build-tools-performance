import React from 'react';
const LABEL_12374 = 'component_12374';
export function Component12374({ value = 12374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12374, 'data-value': derived.doubled }, children);
}
export default Component12374;
