import React from 'react';
const LABEL_6623 = 'component_6623';
export function Component6623({ value = 6623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6623, 'data-value': derived.doubled }, children);
}
export default Component6623;
