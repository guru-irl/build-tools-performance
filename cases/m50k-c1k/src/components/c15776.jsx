import React from 'react';
const LABEL_15776 = 'component_15776';
export function Component15776({ value = 15776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15776, 'data-value': derived.doubled }, children);
}
export default Component15776;
