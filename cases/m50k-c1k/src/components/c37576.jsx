import React from 'react';
const LABEL_37576 = 'component_37576';
export function Component37576({ value = 37576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37576, 'data-value': derived.doubled }, children);
}
export default Component37576;
