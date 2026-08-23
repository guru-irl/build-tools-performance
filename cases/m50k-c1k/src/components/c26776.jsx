import React from 'react';
const LABEL_26776 = 'component_26776';
export function Component26776({ value = 26776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26776, 'data-value': derived.doubled }, children);
}
export default Component26776;
