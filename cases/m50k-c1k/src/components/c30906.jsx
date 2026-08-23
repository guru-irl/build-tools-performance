import React from 'react';
const LABEL_30906 = 'component_30906';
export function Component30906({ value = 30906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30906, 'data-value': derived.doubled }, children);
}
export default Component30906;
