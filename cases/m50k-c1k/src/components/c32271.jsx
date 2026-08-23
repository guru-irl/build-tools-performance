import React from 'react';
const LABEL_32271 = 'component_32271';
export function Component32271({ value = 32271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32271, 'data-value': derived.doubled }, children);
}
export default Component32271;
