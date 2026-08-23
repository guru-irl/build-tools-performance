import React from 'react';
const LABEL_17077 = 'component_17077';
export function Component17077({ value = 17077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17077, 'data-value': derived.doubled }, children);
}
export default Component17077;
