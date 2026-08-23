import React from 'react';
const LABEL_30080 = 'component_30080';
export function Component30080({ value = 30080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30080, 'data-value': derived.doubled }, children);
}
export default Component30080;
