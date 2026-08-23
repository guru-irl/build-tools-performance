import React from 'react';
const LABEL_22962 = 'component_22962';
export function Component22962({ value = 22962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22962, 'data-value': derived.doubled }, children);
}
export default Component22962;
