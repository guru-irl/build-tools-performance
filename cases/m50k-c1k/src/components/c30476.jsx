import React from 'react';
const LABEL_30476 = 'component_30476';
export function Component30476({ value = 30476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30476, 'data-value': derived.doubled }, children);
}
export default Component30476;
