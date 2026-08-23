import React from 'react';
const LABEL_31494 = 'component_31494';
export function Component31494({ value = 31494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31494, 'data-value': derived.doubled }, children);
}
export default Component31494;
