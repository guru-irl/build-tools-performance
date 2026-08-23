import React from 'react';
const LABEL_4662 = 'component_4662';
export function Component4662({ value = 4662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4662, 'data-value': derived.doubled }, children);
}
export default Component4662;
