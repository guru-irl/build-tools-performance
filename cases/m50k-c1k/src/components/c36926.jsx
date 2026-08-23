import React from 'react';
const LABEL_36926 = 'component_36926';
export function Component36926({ value = 36926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36926, 'data-value': derived.doubled }, children);
}
export default Component36926;
