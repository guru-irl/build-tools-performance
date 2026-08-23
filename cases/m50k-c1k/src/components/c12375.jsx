import React from 'react';
const LABEL_12375 = 'component_12375';
export function Component12375({ value = 12375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12375, 'data-value': derived.doubled }, children);
}
export default Component12375;
