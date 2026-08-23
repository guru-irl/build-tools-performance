import React from 'react';
const LABEL_33427 = 'component_33427';
export function Component33427({ value = 33427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33427, 'data-value': derived.doubled }, children);
}
export default Component33427;
