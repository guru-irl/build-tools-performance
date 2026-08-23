import React from 'react';
const LABEL_32916 = 'component_32916';
export function Component32916({ value = 32916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32916, 'data-value': derived.doubled }, children);
}
export default Component32916;
