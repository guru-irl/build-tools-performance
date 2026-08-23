import React from 'react';
const LABEL_30206 = 'component_30206';
export function Component30206({ value = 30206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30206, 'data-value': derived.doubled }, children);
}
export default Component30206;
