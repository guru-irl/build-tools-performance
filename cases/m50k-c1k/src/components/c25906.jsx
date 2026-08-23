import React from 'react';
const LABEL_25906 = 'component_25906';
export function Component25906({ value = 25906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25906, 'data-value': derived.doubled }, children);
}
export default Component25906;
