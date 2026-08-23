import React from 'react';
const LABEL_32404 = 'component_32404';
export function Component32404({ value = 32404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32404, 'data-value': derived.doubled }, children);
}
export default Component32404;
