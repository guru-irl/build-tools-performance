import React from 'react';
const LABEL_37510 = 'component_37510';
export function Component37510({ value = 37510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37510, 'data-value': derived.doubled }, children);
}
export default Component37510;
