import React from 'react';
const LABEL_12619 = 'component_12619';
export function Component12619({ value = 12619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12619, 'data-value': derived.doubled }, children);
}
export default Component12619;
