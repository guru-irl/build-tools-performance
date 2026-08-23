import React from 'react';
const LABEL_42494 = 'component_42494';
export function Component42494({ value = 42494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42494, 'data-value': derived.doubled }, children);
}
export default Component42494;
