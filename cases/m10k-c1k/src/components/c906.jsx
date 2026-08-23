import React from 'react';
const LABEL_906 = 'component_906';
export function Component906({ value = 906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_906, 'data-value': derived.doubled }, children);
}
export default Component906;
