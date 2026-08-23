import React from 'react';
const LABEL_33192 = 'component_33192';
export function Component33192({ value = 33192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33192, 'data-value': derived.doubled }, children);
}
export default Component33192;
