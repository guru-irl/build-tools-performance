import React from 'react';
const LABEL_13271 = 'component_13271';
export function Component13271({ value = 13271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13271, 'data-value': derived.doubled }, children);
}
export default Component13271;
