import React from 'react';
const LABEL_40662 = 'component_40662';
export function Component40662({ value = 40662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40662, 'data-value': derived.doubled }, children);
}
export default Component40662;
