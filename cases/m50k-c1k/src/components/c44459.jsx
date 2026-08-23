import React from 'react';
const LABEL_44459 = 'component_44459';
export function Component44459({ value = 44459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44459, 'data-value': derived.doubled }, children);
}
export default Component44459;
