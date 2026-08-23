import React from 'react';
const LABEL_32154 = 'component_32154';
export function Component32154({ value = 32154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32154, 'data-value': derived.doubled }, children);
}
export default Component32154;
