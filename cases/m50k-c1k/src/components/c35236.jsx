import React from 'react';
const LABEL_35236 = 'component_35236';
export function Component35236({ value = 35236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35236, 'data-value': derived.doubled }, children);
}
export default Component35236;
