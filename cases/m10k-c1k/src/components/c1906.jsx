import React from 'react';
const LABEL_1906 = 'component_1906';
export function Component1906({ value = 1906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1906, 'data-value': derived.doubled }, children);
}
export default Component1906;
