import React from 'react';
const LABEL_2663 = 'component_2663';
export function Component2663({ value = 2663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2663, 'data-value': derived.doubled }, children);
}
export default Component2663;
