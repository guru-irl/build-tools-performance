import React from 'react';
const LABEL_13379 = 'component_13379';
export function Component13379({ value = 13379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13379, 'data-value': derived.doubled }, children);
}
export default Component13379;
