import React from 'react';
const LABEL_42776 = 'component_42776';
export function Component42776({ value = 42776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42776, 'data-value': derived.doubled }, children);
}
export default Component42776;
