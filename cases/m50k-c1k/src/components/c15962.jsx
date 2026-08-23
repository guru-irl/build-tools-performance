import React from 'react';
const LABEL_15962 = 'component_15962';
export function Component15962({ value = 15962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15962, 'data-value': derived.doubled }, children);
}
export default Component15962;
