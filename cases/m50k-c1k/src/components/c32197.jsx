import React from 'react';
const LABEL_32197 = 'component_32197';
export function Component32197({ value = 32197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32197, 'data-value': derived.doubled }, children);
}
export default Component32197;
