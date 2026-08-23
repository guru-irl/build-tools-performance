import React from 'react';
const LABEL_21662 = 'component_21662';
export function Component21662({ value = 21662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21662, 'data-value': derived.doubled }, children);
}
export default Component21662;
