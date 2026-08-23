import React from 'react';
const LABEL_33984 = 'component_33984';
export function Component33984({ value = 33984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33984, 'data-value': derived.doubled }, children);
}
export default Component33984;
