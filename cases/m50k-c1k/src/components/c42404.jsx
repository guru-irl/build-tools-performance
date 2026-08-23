import React from 'react';
const LABEL_42404 = 'component_42404';
export function Component42404({ value = 42404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42404, 'data-value': derived.doubled }, children);
}
export default Component42404;
