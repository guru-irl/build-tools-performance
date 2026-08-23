import React from 'react';
const LABEL_18906 = 'component_18906';
export function Component18906({ value = 18906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18906, 'data-value': derived.doubled }, children);
}
export default Component18906;
