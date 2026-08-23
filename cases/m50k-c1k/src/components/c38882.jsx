import React from 'react';
const LABEL_38882 = 'component_38882';
export function Component38882({ value = 38882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38882, 'data-value': derived.doubled }, children);
}
export default Component38882;
