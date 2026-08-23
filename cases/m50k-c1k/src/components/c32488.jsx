import React from 'react';
const LABEL_32488 = 'component_32488';
export function Component32488({ value = 32488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32488, 'data-value': derived.doubled }, children);
}
export default Component32488;
