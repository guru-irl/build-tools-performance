import React from 'react';
const LABEL_36403 = 'component_36403';
export function Component36403({ value = 36403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36403, 'data-value': derived.doubled }, children);
}
export default Component36403;
