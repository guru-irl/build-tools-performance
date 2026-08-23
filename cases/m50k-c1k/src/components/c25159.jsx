import React from 'react';
const LABEL_25159 = 'component_25159';
export function Component25159({ value = 25159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25159, 'data-value': derived.doubled }, children);
}
export default Component25159;
