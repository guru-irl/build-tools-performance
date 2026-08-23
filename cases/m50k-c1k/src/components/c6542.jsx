import React from 'react';
const LABEL_6542 = 'component_6542';
export function Component6542({ value = 6542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6542, 'data-value': derived.doubled }, children);
}
export default Component6542;
