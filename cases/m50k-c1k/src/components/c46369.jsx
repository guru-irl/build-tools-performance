import React from 'react';
const LABEL_46369 = 'component_46369';
export function Component46369({ value = 46369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46369, 'data-value': derived.doubled }, children);
}
export default Component46369;
