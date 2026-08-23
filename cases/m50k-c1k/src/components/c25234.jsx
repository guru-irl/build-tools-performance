import React from 'react';
const LABEL_25234 = 'component_25234';
export function Component25234({ value = 25234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25234, 'data-value': derived.doubled }, children);
}
export default Component25234;
