import React from 'react';
const LABEL_38243 = 'component_38243';
export function Component38243({ value = 38243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38243, 'data-value': derived.doubled }, children);
}
export default Component38243;
