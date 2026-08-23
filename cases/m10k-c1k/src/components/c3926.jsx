import React from 'react';
const LABEL_3926 = 'component_3926';
export function Component3926({ value = 3926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3926, 'data-value': derived.doubled }, children);
}
export default Component3926;
