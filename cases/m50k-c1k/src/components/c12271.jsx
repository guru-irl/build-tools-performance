import React from 'react';
const LABEL_12271 = 'component_12271';
export function Component12271({ value = 12271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12271, 'data-value': derived.doubled }, children);
}
export default Component12271;
