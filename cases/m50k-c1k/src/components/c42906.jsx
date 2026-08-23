import React from 'react';
const LABEL_42906 = 'component_42906';
export function Component42906({ value = 42906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42906, 'data-value': derived.doubled }, children);
}
export default Component42906;
