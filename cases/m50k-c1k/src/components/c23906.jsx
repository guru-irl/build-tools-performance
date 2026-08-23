import React from 'react';
const LABEL_23906 = 'component_23906';
export function Component23906({ value = 23906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23906, 'data-value': derived.doubled }, children);
}
export default Component23906;
