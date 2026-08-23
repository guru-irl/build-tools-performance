import React from 'react';
const LABEL_23530 = 'component_23530';
export function Component23530({ value = 23530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23530, 'data-value': derived.doubled }, children);
}
export default Component23530;
