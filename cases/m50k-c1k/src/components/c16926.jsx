import React from 'react';
const LABEL_16926 = 'component_16926';
export function Component16926({ value = 16926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16926, 'data-value': derived.doubled }, children);
}
export default Component16926;
