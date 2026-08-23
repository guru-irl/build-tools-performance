import React from 'react';
const LABEL_30352 = 'component_30352';
export function Component30352({ value = 30352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30352, 'data-value': derived.doubled }, children);
}
export default Component30352;
