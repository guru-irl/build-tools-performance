import React from 'react';
const LABEL_13662 = 'component_13662';
export function Component13662({ value = 13662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13662, 'data-value': derived.doubled }, children);
}
export default Component13662;
