import React from 'react';
const LABEL_3242 = 'component_3242';
export function Component3242({ value = 3242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3242, 'data-value': derived.doubled }, children);
}
export default Component3242;
