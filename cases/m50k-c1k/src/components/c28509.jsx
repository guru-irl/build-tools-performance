import React from 'react';
const LABEL_28509 = 'component_28509';
export function Component28509({ value = 28509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28509, 'data-value': derived.doubled }, children);
}
export default Component28509;
