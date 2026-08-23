import React from 'react';
const LABEL_46516 = 'component_46516';
export function Component46516({ value = 46516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46516, 'data-value': derived.doubled }, children);
}
export default Component46516;
