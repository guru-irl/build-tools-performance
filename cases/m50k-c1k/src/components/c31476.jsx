import React from 'react';
const LABEL_31476 = 'component_31476';
export function Component31476({ value = 31476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31476, 'data-value': derived.doubled }, children);
}
export default Component31476;
