import React from 'react';
const LABEL_36530 = 'component_36530';
export function Component36530({ value = 36530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36530, 'data-value': derived.doubled }, children);
}
export default Component36530;
