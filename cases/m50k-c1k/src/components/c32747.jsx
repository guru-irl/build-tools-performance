import React from 'react';
const LABEL_32747 = 'component_32747';
export function Component32747({ value = 32747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32747, 'data-value': derived.doubled }, children);
}
export default Component32747;
