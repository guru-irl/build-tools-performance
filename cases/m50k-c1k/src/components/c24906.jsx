import React from 'react';
const LABEL_24906 = 'component_24906';
export function Component24906({ value = 24906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24906, 'data-value': derived.doubled }, children);
}
export default Component24906;
