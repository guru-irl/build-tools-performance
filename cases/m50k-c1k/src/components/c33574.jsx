import React from 'react';
const LABEL_33574 = 'component_33574';
export function Component33574({ value = 33574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33574, 'data-value': derived.doubled }, children);
}
export default Component33574;
