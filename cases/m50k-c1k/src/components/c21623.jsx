import React from 'react';
const LABEL_21623 = 'component_21623';
export function Component21623({ value = 21623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21623, 'data-value': derived.doubled }, children);
}
export default Component21623;
