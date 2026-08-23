import React from 'react';
const LABEL_33761 = 'component_33761';
export function Component33761({ value = 33761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33761, 'data-value': derived.doubled }, children);
}
export default Component33761;
