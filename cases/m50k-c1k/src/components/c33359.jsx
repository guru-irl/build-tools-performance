import React from 'react';
const LABEL_33359 = 'component_33359';
export function Component33359({ value = 33359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33359, 'data-value': derived.doubled }, children);
}
export default Component33359;
