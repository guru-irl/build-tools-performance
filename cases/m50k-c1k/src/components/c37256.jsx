import React from 'react';
const LABEL_37256 = 'component_37256';
export function Component37256({ value = 37256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37256, 'data-value': derived.doubled }, children);
}
export default Component37256;
