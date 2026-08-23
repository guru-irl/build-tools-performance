import React from 'react';
const LABEL_251 = 'component_251';
export function Component251({ value = 251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_251, 'data-value': derived.doubled }, children);
}
export default Component251;
