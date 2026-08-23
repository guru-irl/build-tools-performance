import React from 'react';
const LABEL_39753 = 'component_39753';
export function Component39753({ value = 39753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39753, 'data-value': derived.doubled }, children);
}
export default Component39753;
