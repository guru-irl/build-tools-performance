import React from 'react';
const LABEL_14092 = 'component_14092';
export function Component14092({ value = 14092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14092, 'data-value': derived.doubled }, children);
}
export default Component14092;
