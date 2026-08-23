import React from 'react';
const LABEL_23137 = 'component_23137';
export function Component23137({ value = 23137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23137, 'data-value': derived.doubled }, children);
}
export default Component23137;
