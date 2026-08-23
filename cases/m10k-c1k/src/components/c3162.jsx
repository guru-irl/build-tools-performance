import React from 'react';
const LABEL_3162 = 'component_3162';
export function Component3162({ value = 3162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3162, 'data-value': derived.doubled }, children);
}
export default Component3162;
