import React from 'react';
const LABEL_10404 = 'component_10404';
export function Component10404({ value = 10404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10404, 'data-value': derived.doubled }, children);
}
export default Component10404;
