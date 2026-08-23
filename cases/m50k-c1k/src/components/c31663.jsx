import React from 'react';
const LABEL_31663 = 'component_31663';
export function Component31663({ value = 31663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31663, 'data-value': derived.doubled }, children);
}
export default Component31663;
