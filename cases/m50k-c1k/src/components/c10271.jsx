import React from 'react';
const LABEL_10271 = 'component_10271';
export function Component10271({ value = 10271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10271, 'data-value': derived.doubled }, children);
}
export default Component10271;
