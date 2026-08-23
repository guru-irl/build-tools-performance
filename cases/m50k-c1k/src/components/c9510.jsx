import React from 'react';
const LABEL_9510 = 'component_9510';
export function Component9510({ value = 9510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9510, 'data-value': derived.doubled }, children);
}
export default Component9510;
