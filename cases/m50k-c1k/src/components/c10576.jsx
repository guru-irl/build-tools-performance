import React from 'react';
const LABEL_10576 = 'component_10576';
export function Component10576({ value = 10576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10576, 'data-value': derived.doubled }, children);
}
export default Component10576;
