import React from 'react';
const LABEL_14437 = 'component_14437';
export function Component14437({ value = 14437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14437, 'data-value': derived.doubled }, children);
}
export default Component14437;
