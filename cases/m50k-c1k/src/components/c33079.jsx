import React from 'react';
const LABEL_33079 = 'component_33079';
export function Component33079({ value = 33079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33079, 'data-value': derived.doubled }, children);
}
export default Component33079;
