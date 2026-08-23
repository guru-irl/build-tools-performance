import React from 'react';
const LABEL_20404 = 'component_20404';
export function Component20404({ value = 20404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20404, 'data-value': derived.doubled }, children);
}
export default Component20404;
