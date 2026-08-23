import React from 'react';
const LABEL_33542 = 'component_33542';
export function Component33542({ value = 33542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33542, 'data-value': derived.doubled }, children);
}
export default Component33542;
