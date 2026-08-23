import React from 'react';
const LABEL_45662 = 'component_45662';
export function Component45662({ value = 45662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45662, 'data-value': derived.doubled }, children);
}
export default Component45662;
