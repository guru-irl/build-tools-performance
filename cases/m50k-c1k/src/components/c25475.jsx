import React from 'react';
const LABEL_25475 = 'component_25475';
export function Component25475({ value = 25475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25475, 'data-value': derived.doubled }, children);
}
export default Component25475;
