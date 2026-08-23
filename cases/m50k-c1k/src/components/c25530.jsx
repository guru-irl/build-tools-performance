import React from 'react';
const LABEL_25530 = 'component_25530';
export function Component25530({ value = 25530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25530, 'data-value': derived.doubled }, children);
}
export default Component25530;
