import React from 'react';
const LABEL_9530 = 'component_9530';
export function Component9530({ value = 9530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9530, 'data-value': derived.doubled }, children);
}
export default Component9530;
