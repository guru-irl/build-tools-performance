import React from 'react';
const LABEL_32926 = 'component_32926';
export function Component32926({ value = 32926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32926, 'data-value': derived.doubled }, children);
}
export default Component32926;
