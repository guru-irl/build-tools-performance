import React from 'react';
const LABEL_8271 = 'component_8271';
export function Component8271({ value = 8271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8271, 'data-value': derived.doubled }, children);
}
export default Component8271;
