import React from 'react';
const LABEL_16576 = 'component_16576';
export function Component16576({ value = 16576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16576, 'data-value': derived.doubled }, children);
}
export default Component16576;
