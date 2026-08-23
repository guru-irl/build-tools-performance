import React from 'react';
const LABEL_24404 = 'component_24404';
export function Component24404({ value = 24404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24404, 'data-value': derived.doubled }, children);
}
export default Component24404;
