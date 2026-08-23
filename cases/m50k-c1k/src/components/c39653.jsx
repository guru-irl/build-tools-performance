import React from 'react';
const LABEL_39653 = 'component_39653';
export function Component39653({ value = 39653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39653, 'data-value': derived.doubled }, children);
}
export default Component39653;
