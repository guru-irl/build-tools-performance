import React from 'react';
const LABEL_23734 = 'component_23734';
export function Component23734({ value = 23734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23734, 'data-value': derived.doubled }, children);
}
export default Component23734;
