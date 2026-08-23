import React from 'react';
const LABEL_32734 = 'component_32734';
export function Component32734({ value = 32734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32734, 'data-value': derived.doubled }, children);
}
export default Component32734;
