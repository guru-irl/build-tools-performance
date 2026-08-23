import React from 'react';
const LABEL_44109 = 'component_44109';
export function Component44109({ value = 44109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44109, 'data-value': derived.doubled }, children);
}
export default Component44109;
