import React from 'react';
const LABEL_8404 = 'component_8404';
export function Component8404({ value = 8404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8404, 'data-value': derived.doubled }, children);
}
export default Component8404;
