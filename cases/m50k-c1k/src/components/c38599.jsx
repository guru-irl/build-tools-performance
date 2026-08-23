import React from 'react';
const LABEL_38599 = 'component_38599';
export function Component38599({ value = 38599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38599, 'data-value': derived.doubled }, children);
}
export default Component38599;
