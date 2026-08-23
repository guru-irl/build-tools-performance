import React from 'react';
const LABEL_35906 = 'component_35906';
export function Component35906({ value = 35906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35906, 'data-value': derived.doubled }, children);
}
export default Component35906;
