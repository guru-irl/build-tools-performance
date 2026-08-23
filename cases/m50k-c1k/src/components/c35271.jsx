import React from 'react';
const LABEL_35271 = 'component_35271';
export function Component35271({ value = 35271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35271, 'data-value': derived.doubled }, children);
}
export default Component35271;
