import React from 'react';
const LABEL_44271 = 'component_44271';
export function Component44271({ value = 44271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44271, 'data-value': derived.doubled }, children);
}
export default Component44271;
