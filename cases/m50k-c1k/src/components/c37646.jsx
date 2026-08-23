import React from 'react';
const LABEL_37646 = 'component_37646';
export function Component37646({ value = 37646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37646, 'data-value': derived.doubled }, children);
}
export default Component37646;
