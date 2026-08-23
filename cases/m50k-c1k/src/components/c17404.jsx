import React from 'react';
const LABEL_17404 = 'component_17404';
export function Component17404({ value = 17404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17404, 'data-value': derived.doubled }, children);
}
export default Component17404;
