import React from 'react';
const LABEL_32802 = 'component_32802';
export function Component32802({ value = 32802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32802, 'data-value': derived.doubled }, children);
}
export default Component32802;
