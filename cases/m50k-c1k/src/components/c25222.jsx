import React from 'react';
const LABEL_25222 = 'component_25222';
export function Component25222({ value = 25222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25222, 'data-value': derived.doubled }, children);
}
export default Component25222;
