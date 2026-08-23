import React from 'react';
const LABEL_12531 = 'component_12531';
export function Component12531({ value = 12531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12531, 'data-value': derived.doubled }, children);
}
export default Component12531;
