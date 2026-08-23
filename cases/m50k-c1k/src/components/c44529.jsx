import React from 'react';
const LABEL_44529 = 'component_44529';
export function Component44529({ value = 44529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44529, 'data-value': derived.doubled }, children);
}
export default Component44529;
