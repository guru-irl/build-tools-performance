import React from 'react';
const LABEL_25476 = 'component_25476';
export function Component25476({ value = 25476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25476, 'data-value': derived.doubled }, children);
}
export default Component25476;
