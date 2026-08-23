import React from 'react';
const LABEL_19623 = 'component_19623';
export function Component19623({ value = 19623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19623, 'data-value': derived.doubled }, children);
}
export default Component19623;
