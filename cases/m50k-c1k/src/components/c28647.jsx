import React from 'react';
const LABEL_28647 = 'component_28647';
export function Component28647({ value = 28647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28647, 'data-value': derived.doubled }, children);
}
export default Component28647;
