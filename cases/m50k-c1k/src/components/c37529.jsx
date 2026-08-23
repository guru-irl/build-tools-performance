import React from 'react';
const LABEL_37529 = 'component_37529';
export function Component37529({ value = 37529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37529, 'data-value': derived.doubled }, children);
}
export default Component37529;
