import React from 'react';
const LABEL_21663 = 'component_21663';
export function Component21663({ value = 21663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21663, 'data-value': derived.doubled }, children);
}
export default Component21663;
