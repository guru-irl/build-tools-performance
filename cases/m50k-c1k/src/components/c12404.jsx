import React from 'react';
const LABEL_12404 = 'component_12404';
export function Component12404({ value = 12404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12404, 'data-value': derived.doubled }, children);
}
export default Component12404;
