import React from 'react';
const LABEL_32071 = 'component_32071';
export function Component32071({ value = 32071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32071, 'data-value': derived.doubled }, children);
}
export default Component32071;
