import React from 'react';
const LABEL_30246 = 'component_30246';
export function Component30246({ value = 30246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30246, 'data-value': derived.doubled }, children);
}
export default Component30246;
