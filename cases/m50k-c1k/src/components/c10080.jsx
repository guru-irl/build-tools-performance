import React from 'react';
const LABEL_10080 = 'component_10080';
export function Component10080({ value = 10080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10080, 'data-value': derived.doubled }, children);
}
export default Component10080;
