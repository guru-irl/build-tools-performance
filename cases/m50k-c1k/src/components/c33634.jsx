import React from 'react';
const LABEL_33634 = 'component_33634';
export function Component33634({ value = 33634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33634, 'data-value': derived.doubled }, children);
}
export default Component33634;
