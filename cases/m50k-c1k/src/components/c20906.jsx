import React from 'react';
const LABEL_20906 = 'component_20906';
export function Component20906({ value = 20906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20906, 'data-value': derived.doubled }, children);
}
export default Component20906;
