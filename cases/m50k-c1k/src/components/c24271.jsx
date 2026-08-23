import React from 'react';
const LABEL_24271 = 'component_24271';
export function Component24271({ value = 24271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24271, 'data-value': derived.doubled }, children);
}
export default Component24271;
