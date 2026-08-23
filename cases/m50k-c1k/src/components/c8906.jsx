import React from 'react';
const LABEL_8906 = 'component_8906';
export function Component8906({ value = 8906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8906, 'data-value': derived.doubled }, children);
}
export default Component8906;
