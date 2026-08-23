import React from 'react';
const LABEL_32726 = 'component_32726';
export function Component32726({ value = 32726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32726, 'data-value': derived.doubled }, children);
}
export default Component32726;
