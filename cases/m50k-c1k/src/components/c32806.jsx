import React from 'react';
const LABEL_32806 = 'component_32806';
export function Component32806({ value = 32806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32806, 'data-value': derived.doubled }, children);
}
export default Component32806;
