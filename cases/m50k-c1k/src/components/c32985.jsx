import React from 'react';
const LABEL_32985 = 'component_32985';
export function Component32985({ value = 32985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32985, 'data-value': derived.doubled }, children);
}
export default Component32985;
