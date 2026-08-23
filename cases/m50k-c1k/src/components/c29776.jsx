import React from 'react';
const LABEL_29776 = 'component_29776';
export function Component29776({ value = 29776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29776, 'data-value': derived.doubled }, children);
}
export default Component29776;
