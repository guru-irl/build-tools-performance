import React from 'react';
const LABEL_17663 = 'component_17663';
export function Component17663({ value = 17663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17663, 'data-value': derived.doubled }, children);
}
export default Component17663;
