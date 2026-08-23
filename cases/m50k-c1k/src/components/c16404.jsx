import React from 'react';
const LABEL_16404 = 'component_16404';
export function Component16404({ value = 16404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16404, 'data-value': derived.doubled }, children);
}
export default Component16404;
