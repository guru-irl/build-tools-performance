import React from 'react';
const LABEL_15404 = 'component_15404';
export function Component15404({ value = 15404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15404, 'data-value': derived.doubled }, children);
}
export default Component15404;
