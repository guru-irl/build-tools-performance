import React from 'react';
const LABEL_21926 = 'component_21926';
export function Component21926({ value = 21926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21926, 'data-value': derived.doubled }, children);
}
export default Component21926;
