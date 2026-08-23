import React from 'react';
const LABEL_15842 = 'component_15842';
export function Component15842({ value = 15842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15842, 'data-value': derived.doubled }, children);
}
export default Component15842;
