import React from 'react';
const LABEL_31004 = 'component_31004';
export function Component31004({ value = 31004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31004, 'data-value': derived.doubled }, children);
}
export default Component31004;
