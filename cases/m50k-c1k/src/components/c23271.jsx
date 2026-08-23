import React from 'react';
const LABEL_23271 = 'component_23271';
export function Component23271({ value = 23271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23271, 'data-value': derived.doubled }, children);
}
export default Component23271;
