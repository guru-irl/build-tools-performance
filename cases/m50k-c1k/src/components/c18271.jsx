import React from 'react';
const LABEL_18271 = 'component_18271';
export function Component18271({ value = 18271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18271, 'data-value': derived.doubled }, children);
}
export default Component18271;
