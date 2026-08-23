import React from 'react';
const LABEL_28906 = 'component_28906';
export function Component28906({ value = 28906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28906, 'data-value': derived.doubled }, children);
}
export default Component28906;
