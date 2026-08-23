import React from 'react';
const LABEL_3128 = 'component_3128';
export function Component3128({ value = 3128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3128, 'data-value': derived.doubled }, children);
}
export default Component3128;
