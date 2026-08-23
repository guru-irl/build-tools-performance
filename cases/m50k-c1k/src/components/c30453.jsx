import React from 'react';
const LABEL_30453 = 'component_30453';
export function Component30453({ value = 30453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30453, 'data-value': derived.doubled }, children);
}
export default Component30453;
