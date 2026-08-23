import React from 'react';
const LABEL_7404 = 'component_7404';
export function Component7404({ value = 7404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7404, 'data-value': derived.doubled }, children);
}
export default Component7404;
