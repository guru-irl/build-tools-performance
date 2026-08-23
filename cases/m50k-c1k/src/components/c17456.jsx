import React from 'react';
const LABEL_17456 = 'component_17456';
export function Component17456({ value = 17456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17456, 'data-value': derived.doubled }, children);
}
export default Component17456;
