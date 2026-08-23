import React from 'react';
const LABEL_32847 = 'component_32847';
export function Component32847({ value = 32847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32847, 'data-value': derived.doubled }, children);
}
export default Component32847;
