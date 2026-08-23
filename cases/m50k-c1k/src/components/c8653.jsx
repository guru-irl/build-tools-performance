import React from 'react';
const LABEL_8653 = 'component_8653';
export function Component8653({ value = 8653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8653, 'data-value': derived.doubled }, children);
}
export default Component8653;
