import React from 'react';
const LABEL_21576 = 'component_21576';
export function Component21576({ value = 21576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21576, 'data-value': derived.doubled }, children);
}
export default Component21576;
