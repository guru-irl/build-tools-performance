import React from 'react';
const LABEL_12159 = 'component_12159';
export function Component12159({ value = 12159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12159, 'data-value': derived.doubled }, children);
}
export default Component12159;
