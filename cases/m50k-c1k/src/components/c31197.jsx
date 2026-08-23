import React from 'react';
const LABEL_31197 = 'component_31197';
export function Component31197({ value = 31197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31197, 'data-value': derived.doubled }, children);
}
export default Component31197;
