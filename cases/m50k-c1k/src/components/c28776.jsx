import React from 'react';
const LABEL_28776 = 'component_28776';
export function Component28776({ value = 28776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28776, 'data-value': derived.doubled }, children);
}
export default Component28776;
