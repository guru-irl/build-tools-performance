import React from 'react';
const LABEL_3673 = 'component_3673';
export function Component3673({ value = 3673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3673, 'data-value': derived.doubled }, children);
}
export default Component3673;
