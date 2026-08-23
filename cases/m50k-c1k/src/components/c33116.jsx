import React from 'react';
const LABEL_33116 = 'component_33116';
export function Component33116({ value = 33116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33116, 'data-value': derived.doubled }, children);
}
export default Component33116;
