import React from 'react';
const LABEL_404 = 'component_404';
export function Component404({ value = 404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_404, 'data-value': derived.doubled }, children);
}
export default Component404;
