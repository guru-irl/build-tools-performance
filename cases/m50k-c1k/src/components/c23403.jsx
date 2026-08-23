import React from 'react';
const LABEL_23403 = 'component_23403';
export function Component23403({ value = 23403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23403, 'data-value': derived.doubled }, children);
}
export default Component23403;
