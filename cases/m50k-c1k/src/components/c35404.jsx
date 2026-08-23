import React from 'react';
const LABEL_35404 = 'component_35404';
export function Component35404({ value = 35404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35404, 'data-value': derived.doubled }, children);
}
export default Component35404;
