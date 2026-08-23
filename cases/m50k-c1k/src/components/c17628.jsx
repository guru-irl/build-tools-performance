import React from 'react';
const LABEL_17628 = 'component_17628';
export function Component17628({ value = 17628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17628, 'data-value': derived.doubled }, children);
}
export default Component17628;
