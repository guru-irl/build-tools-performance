import React from 'react';
const LABEL_36663 = 'component_36663';
export function Component36663({ value = 36663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36663, 'data-value': derived.doubled }, children);
}
export default Component36663;
