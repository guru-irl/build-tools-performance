import React from 'react';
const LABEL_117 = 'component_117';
export function Component117({ value = 117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_117, 'data-value': derived.doubled }, children);
}
export default Component117;
