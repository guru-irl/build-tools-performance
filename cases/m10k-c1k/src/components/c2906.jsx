import React from 'react';
const LABEL_2906 = 'component_2906';
export function Component2906({ value = 2906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2906, 'data-value': derived.doubled }, children);
}
export default Component2906;
