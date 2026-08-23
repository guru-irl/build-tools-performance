import React from 'react';
const LABEL_41354 = 'component_41354';
export function Component41354({ value = 41354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41354, 'data-value': derived.doubled }, children);
}
export default Component41354;
