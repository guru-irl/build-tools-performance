import React from 'react';
const LABEL_15663 = 'component_15663';
export function Component15663({ value = 15663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15663, 'data-value': derived.doubled }, children);
}
export default Component15663;
