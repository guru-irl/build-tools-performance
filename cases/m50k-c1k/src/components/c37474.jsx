import React from 'react';
const LABEL_37474 = 'component_37474';
export function Component37474({ value = 37474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37474, 'data-value': derived.doubled }, children);
}
export default Component37474;
