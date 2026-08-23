import React from 'react';
const LABEL_13602 = 'component_13602';
export function Component13602({ value = 13602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13602, 'data-value': derived.doubled }, children);
}
export default Component13602;
