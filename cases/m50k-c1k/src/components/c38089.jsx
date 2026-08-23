import React from 'react';
const LABEL_38089 = 'component_38089';
export function Component38089({ value = 38089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38089, 'data-value': derived.doubled }, children);
}
export default Component38089;
