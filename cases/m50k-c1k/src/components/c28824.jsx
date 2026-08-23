import React from 'react';
const LABEL_28824 = 'component_28824';
export function Component28824({ value = 28824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28824, 'data-value': derived.doubled }, children);
}
export default Component28824;
