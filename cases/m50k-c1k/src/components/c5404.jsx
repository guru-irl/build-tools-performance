import React from 'react';
const LABEL_5404 = 'component_5404';
export function Component5404({ value = 5404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5404, 'data-value': derived.doubled }, children);
}
export default Component5404;
