import React from 'react';
const LABEL_3085 = 'component_3085';
export function Component3085({ value = 3085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3085, 'data-value': derived.doubled }, children);
}
export default Component3085;
