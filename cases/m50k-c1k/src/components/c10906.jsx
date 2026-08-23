import React from 'react';
const LABEL_10906 = 'component_10906';
export function Component10906({ value = 10906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10906, 'data-value': derived.doubled }, children);
}
export default Component10906;
