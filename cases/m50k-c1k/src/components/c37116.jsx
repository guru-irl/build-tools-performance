import React from 'react';
const LABEL_37116 = 'component_37116';
export function Component37116({ value = 37116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37116, 'data-value': derived.doubled }, children);
}
export default Component37116;
