import React from 'react';
const LABEL_35092 = 'component_35092';
export function Component35092({ value = 35092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35092, 'data-value': derived.doubled }, children);
}
export default Component35092;
