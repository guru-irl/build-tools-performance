import React from 'react';
const LABEL_12025 = 'component_12025';
export function Component12025({ value = 12025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12025, 'data-value': derived.doubled }, children);
}
export default Component12025;
