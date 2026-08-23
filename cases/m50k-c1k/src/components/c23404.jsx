import React from 'react';
const LABEL_23404 = 'component_23404';
export function Component23404({ value = 23404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23404, 'data-value': derived.doubled }, children);
}
export default Component23404;
