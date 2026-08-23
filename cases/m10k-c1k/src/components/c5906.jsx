import React from 'react';
const LABEL_5906 = 'component_5906';
export function Component5906({ value = 5906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5906, 'data-value': derived.doubled }, children);
}
export default Component5906;
