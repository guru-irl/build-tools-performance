import React from 'react';
const LABEL_29906 = 'component_29906';
export function Component29906({ value = 29906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29906, 'data-value': derived.doubled }, children);
}
export default Component29906;
