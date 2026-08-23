import React from 'react';
const LABEL_15826 = 'component_15826';
export function Component15826({ value = 15826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15826, 'data-value': derived.doubled }, children);
}
export default Component15826;
