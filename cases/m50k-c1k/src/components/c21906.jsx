import React from 'react';
const LABEL_21906 = 'component_21906';
export function Component21906({ value = 21906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21906, 'data-value': derived.doubled }, children);
}
export default Component21906;
