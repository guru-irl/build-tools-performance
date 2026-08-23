import React from 'react';
const LABEL_9906 = 'component_9906';
export function Component9906({ value = 9906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9906, 'data-value': derived.doubled }, children);
}
export default Component9906;
