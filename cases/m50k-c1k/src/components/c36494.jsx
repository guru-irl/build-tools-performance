import React from 'react';
const LABEL_36494 = 'component_36494';
export function Component36494({ value = 36494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36494, 'data-value': derived.doubled }, children);
}
export default Component36494;
