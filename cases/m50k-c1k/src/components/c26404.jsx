import React from 'react';
const LABEL_26404 = 'component_26404';
export function Component26404({ value = 26404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26404, 'data-value': derived.doubled }, children);
}
export default Component26404;
