import React from 'react';
const LABEL_2662 = 'component_2662';
export function Component2662({ value = 2662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2662, 'data-value': derived.doubled }, children);
}
export default Component2662;
