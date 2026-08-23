import React from 'react';
const LABEL_38197 = 'component_38197';
export function Component38197({ value = 38197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38197, 'data-value': derived.doubled }, children);
}
export default Component38197;
