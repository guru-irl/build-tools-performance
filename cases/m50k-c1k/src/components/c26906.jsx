import React from 'react';
const LABEL_26906 = 'component_26906';
export function Component26906({ value = 26906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26906, 'data-value': derived.doubled }, children);
}
export default Component26906;
