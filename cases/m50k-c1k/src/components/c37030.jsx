import React from 'react';
const LABEL_37030 = 'component_37030';
export function Component37030({ value = 37030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37030, 'data-value': derived.doubled }, children);
}
export default Component37030;
