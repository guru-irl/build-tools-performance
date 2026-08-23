import React from 'react';
const LABEL_12151 = 'component_12151';
export function Component12151({ value = 12151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12151, 'data-value': derived.doubled }, children);
}
export default Component12151;
