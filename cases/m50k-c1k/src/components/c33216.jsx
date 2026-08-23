import React from 'react';
const LABEL_33216 = 'component_33216';
export function Component33216({ value = 33216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33216, 'data-value': derived.doubled }, children);
}
export default Component33216;
