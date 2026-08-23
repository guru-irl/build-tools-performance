import React from 'react';
const LABEL_32118 = 'component_32118';
export function Component32118({ value = 32118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32118, 'data-value': derived.doubled }, children);
}
export default Component32118;
