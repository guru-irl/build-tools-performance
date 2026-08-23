import React from 'react';
const LABEL_33776 = 'component_33776';
export function Component33776({ value = 33776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33776, 'data-value': derived.doubled }, children);
}
export default Component33776;
