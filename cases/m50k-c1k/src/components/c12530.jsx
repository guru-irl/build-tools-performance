import React from 'react';
const LABEL_12530 = 'component_12530';
export function Component12530({ value = 12530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12530, 'data-value': derived.doubled }, children);
}
export default Component12530;
