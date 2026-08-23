import React from 'react';
const LABEL_37117 = 'component_37117';
export function Component37117({ value = 37117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37117, 'data-value': derived.doubled }, children);
}
export default Component37117;
