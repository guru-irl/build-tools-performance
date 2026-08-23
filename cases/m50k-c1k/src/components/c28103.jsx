import React from 'react';
const LABEL_28103 = 'component_28103';
export function Component28103({ value = 28103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28103, 'data-value': derived.doubled }, children);
}
export default Component28103;
