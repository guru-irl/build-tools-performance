import React from 'react';
const LABEL_44662 = 'component_44662';
export function Component44662({ value = 44662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44662, 'data-value': derived.doubled }, children);
}
export default Component44662;
