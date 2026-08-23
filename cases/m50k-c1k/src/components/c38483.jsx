import React from 'react';
const LABEL_38483 = 'component_38483';
export function Component38483({ value = 38483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38483, 'data-value': derived.doubled }, children);
}
export default Component38483;
