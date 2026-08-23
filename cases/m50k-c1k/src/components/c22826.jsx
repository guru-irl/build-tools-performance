import React from 'react';
const LABEL_22826 = 'component_22826';
export function Component22826({ value = 22826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22826, 'data-value': derived.doubled }, children);
}
export default Component22826;
