import React from 'react';
const LABEL_33991 = 'component_33991';
export function Component33991({ value = 33991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33991, 'data-value': derived.doubled }, children);
}
export default Component33991;
