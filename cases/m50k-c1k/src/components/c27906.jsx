import React from 'react';
const LABEL_27906 = 'component_27906';
export function Component27906({ value = 27906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27906, 'data-value': derived.doubled }, children);
}
export default Component27906;
