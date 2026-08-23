import React from 'react';
const LABEL_33576 = 'component_33576';
export function Component33576({ value = 33576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33576, 'data-value': derived.doubled }, children);
}
export default Component33576;
