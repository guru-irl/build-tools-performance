import React from 'react';
const LABEL_10293 = 'component_10293';
export function Component10293({ value = 10293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10293, 'data-value': derived.doubled }, children);
}
export default Component10293;
