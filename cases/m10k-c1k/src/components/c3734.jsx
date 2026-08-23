import React from 'react';
const LABEL_3734 = 'component_3734';
export function Component3734({ value = 3734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3734, 'data-value': derived.doubled }, children);
}
export default Component3734;
