import React from 'react';
const LABEL_33914 = 'component_33914';
export function Component33914({ value = 33914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33914, 'data-value': derived.doubled }, children);
}
export default Component33914;
