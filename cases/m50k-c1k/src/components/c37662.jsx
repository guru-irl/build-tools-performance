import React from 'react';
const LABEL_37662 = 'component_37662';
export function Component37662({ value = 37662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37662, 'data-value': derived.doubled }, children);
}
export default Component37662;
