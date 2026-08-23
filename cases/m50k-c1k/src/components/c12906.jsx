import React from 'react';
const LABEL_12906 = 'component_12906';
export function Component12906({ value = 12906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12906, 'data-value': derived.doubled }, children);
}
export default Component12906;
