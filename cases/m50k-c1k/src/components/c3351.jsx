import React from 'react';
const LABEL_3351 = 'component_3351';
export function Component3351({ value = 3351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3351, 'data-value': derived.doubled }, children);
}
export default Component3351;
