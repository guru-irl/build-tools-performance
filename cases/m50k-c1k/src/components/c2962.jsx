import React from 'react';
const LABEL_2962 = 'component_2962';
export function Component2962({ value = 2962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2962, 'data-value': derived.doubled }, children);
}
export default Component2962;
