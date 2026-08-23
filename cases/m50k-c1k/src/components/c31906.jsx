import React from 'react';
const LABEL_31906 = 'component_31906';
export function Component31906({ value = 31906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31906, 'data-value': derived.doubled }, children);
}
export default Component31906;
