import React from 'react';
const LABEL_18430 = 'component_18430';
export function Component18430({ value = 18430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18430, 'data-value': derived.doubled }, children);
}
export default Component18430;
