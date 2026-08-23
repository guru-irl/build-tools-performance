import React from 'react';
const LABEL_13906 = 'component_13906';
export function Component13906({ value = 13906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13906, 'data-value': derived.doubled }, children);
}
export default Component13906;
