import React from 'react';
const LABEL_34906 = 'component_34906';
export function Component34906({ value = 34906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34906, 'data-value': derived.doubled }, children);
}
export default Component34906;
