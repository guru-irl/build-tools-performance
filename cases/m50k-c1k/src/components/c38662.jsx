import React from 'react';
const LABEL_38662 = 'component_38662';
export function Component38662({ value = 38662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38662, 'data-value': derived.doubled }, children);
}
export default Component38662;
