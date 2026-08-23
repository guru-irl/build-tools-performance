import React from 'react';
const LABEL_3663 = 'component_3663';
export function Component3663({ value = 3663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3663, 'data-value': derived.doubled }, children);
}
export default Component3663;
