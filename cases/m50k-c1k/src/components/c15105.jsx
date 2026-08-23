import React from 'react';
const LABEL_15105 = 'component_15105';
export function Component15105({ value = 15105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15105, 'data-value': derived.doubled }, children);
}
export default Component15105;
