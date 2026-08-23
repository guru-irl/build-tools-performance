import React from 'react';
const LABEL_36271 = 'component_36271';
export function Component36271({ value = 36271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36271, 'data-value': derived.doubled }, children);
}
export default Component36271;
