import React from 'react';
const LABEL_38237 = 'component_38237';
export function Component38237({ value = 38237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38237, 'data-value': derived.doubled }, children);
}
export default Component38237;
