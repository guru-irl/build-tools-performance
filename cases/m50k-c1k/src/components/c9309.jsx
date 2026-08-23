import React from 'react';
const LABEL_9309 = 'component_9309';
export function Component9309({ value = 9309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9309, 'data-value': derived.doubled }, children);
}
export default Component9309;
