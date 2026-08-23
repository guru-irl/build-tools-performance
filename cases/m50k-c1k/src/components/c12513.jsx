import React from 'react';
const LABEL_12513 = 'component_12513';
export function Component12513({ value = 12513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12513, 'data-value': derived.doubled }, children);
}
export default Component12513;
