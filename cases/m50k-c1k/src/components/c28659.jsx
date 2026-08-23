import React from 'react';
const LABEL_28659 = 'component_28659';
export function Component28659({ value = 28659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28659, 'data-value': derived.doubled }, children);
}
export default Component28659;
