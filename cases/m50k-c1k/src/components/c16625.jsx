import React from 'react';
const LABEL_16625 = 'component_16625';
export function Component16625({ value = 16625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16625, 'data-value': derived.doubled }, children);
}
export default Component16625;
