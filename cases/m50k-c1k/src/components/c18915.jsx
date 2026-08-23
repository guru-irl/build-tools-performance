import React from 'react';
const LABEL_18915 = 'component_18915';
export function Component18915({ value = 18915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18915, 'data-value': derived.doubled }, children);
}
export default Component18915;
