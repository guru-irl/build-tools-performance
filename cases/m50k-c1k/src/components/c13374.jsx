import React from 'react';
const LABEL_13374 = 'component_13374';
export function Component13374({ value = 13374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13374, 'data-value': derived.doubled }, children);
}
export default Component13374;
