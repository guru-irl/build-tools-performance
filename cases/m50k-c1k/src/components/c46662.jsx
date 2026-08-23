import React from 'react';
const LABEL_46662 = 'component_46662';
export function Component46662({ value = 46662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46662, 'data-value': derived.doubled }, children);
}
export default Component46662;
