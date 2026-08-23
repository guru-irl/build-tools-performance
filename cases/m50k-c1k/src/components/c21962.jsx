import React from 'react';
const LABEL_21962 = 'component_21962';
export function Component21962({ value = 21962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21962, 'data-value': derived.doubled }, children);
}
export default Component21962;
