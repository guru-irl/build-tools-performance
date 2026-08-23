import React from 'react';
const LABEL_23780 = 'component_23780';
export function Component23780({ value = 23780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23780, 'data-value': derived.doubled }, children);
}
export default Component23780;
