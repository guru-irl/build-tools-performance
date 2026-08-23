import React from 'react';
const LABEL_9517 = 'component_9517';
export function Component9517({ value = 9517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9517, 'data-value': derived.doubled }, children);
}
export default Component9517;
