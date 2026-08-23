import React from 'react';
const LABEL_33976 = 'component_33976';
export function Component33976({ value = 33976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33976, 'data-value': derived.doubled }, children);
}
export default Component33976;
