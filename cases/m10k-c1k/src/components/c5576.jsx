import React from 'react';
const LABEL_5576 = 'component_5576';
export function Component5576({ value = 5576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5576, 'data-value': derived.doubled }, children);
}
export default Component5576;
