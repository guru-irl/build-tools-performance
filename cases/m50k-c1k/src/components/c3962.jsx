import React from 'react';
const LABEL_3962 = 'component_3962';
export function Component3962({ value = 3962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3962, 'data-value': derived.doubled }, children);
}
export default Component3962;
