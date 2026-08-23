import React from 'react';
const LABEL_21404 = 'component_21404';
export function Component21404({ value = 21404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21404, 'data-value': derived.doubled }, children);
}
export default Component21404;
