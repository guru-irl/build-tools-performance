import React from 'react';
const LABEL_739 = 'component_739';
export function Component739({ value = 739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_739, 'data-value': derived.doubled }, children);
}
export default Component739;
