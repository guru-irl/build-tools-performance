import React from 'react';
const LABEL_33271 = 'component_33271';
export function Component33271({ value = 33271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33271, 'data-value': derived.doubled }, children);
}
export default Component33271;
