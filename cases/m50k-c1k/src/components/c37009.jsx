import React from 'react';
const LABEL_37009 = 'component_37009';
export function Component37009({ value = 37009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37009, 'data-value': derived.doubled }, children);
}
export default Component37009;
