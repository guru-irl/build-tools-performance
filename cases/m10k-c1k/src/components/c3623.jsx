import React from 'react';
const LABEL_3623 = 'component_3623';
export function Component3623({ value = 3623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3623, 'data-value': derived.doubled }, children);
}
export default Component3623;
