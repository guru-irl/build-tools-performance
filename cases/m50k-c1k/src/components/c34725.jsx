import React from 'react';
const LABEL_34725 = 'component_34725';
export function Component34725({ value = 34725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34725, 'data-value': derived.doubled }, children);
}
export default Component34725;
