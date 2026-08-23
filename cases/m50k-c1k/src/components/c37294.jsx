import React from 'react';
const LABEL_37294 = 'component_37294';
export function Component37294({ value = 37294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37294, 'data-value': derived.doubled }, children);
}
export default Component37294;
