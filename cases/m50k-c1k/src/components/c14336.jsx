import React from 'react';
const LABEL_14336 = 'component_14336';
export function Component14336({ value = 14336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14336, 'data-value': derived.doubled }, children);
}
export default Component14336;
