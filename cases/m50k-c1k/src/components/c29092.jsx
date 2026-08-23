import React from 'react';
const LABEL_29092 = 'component_29092';
export function Component29092({ value = 29092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29092, 'data-value': derived.doubled }, children);
}
export default Component29092;
