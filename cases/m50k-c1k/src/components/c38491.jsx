import React from 'react';
const LABEL_38491 = 'component_38491';
export function Component38491({ value = 38491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38491, 'data-value': derived.doubled }, children);
}
export default Component38491;
