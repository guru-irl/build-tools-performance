import React from 'react';
const LABEL_36369 = 'component_36369';
export function Component36369({ value = 36369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36369, 'data-value': derived.doubled }, children);
}
export default Component36369;
