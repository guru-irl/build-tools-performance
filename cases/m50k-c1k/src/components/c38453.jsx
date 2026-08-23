import React from 'react';
const LABEL_38453 = 'component_38453';
export function Component38453({ value = 38453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38453, 'data-value': derived.doubled }, children);
}
export default Component38453;
