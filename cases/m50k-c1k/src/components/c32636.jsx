import React from 'react';
const LABEL_32636 = 'component_32636';
export function Component32636({ value = 32636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32636, 'data-value': derived.doubled }, children);
}
export default Component32636;
