import React from 'react';
const LABEL_38906 = 'component_38906';
export function Component38906({ value = 38906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38906, 'data-value': derived.doubled }, children);
}
export default Component38906;
