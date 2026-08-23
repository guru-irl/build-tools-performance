import React from 'react';
const LABEL_11154 = 'component_11154';
export function Component11154({ value = 11154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11154, 'data-value': derived.doubled }, children);
}
export default Component11154;
