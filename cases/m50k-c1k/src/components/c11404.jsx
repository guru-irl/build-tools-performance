import React from 'react';
const LABEL_11404 = 'component_11404';
export function Component11404({ value = 11404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11404, 'data-value': derived.doubled }, children);
}
export default Component11404;
