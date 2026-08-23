import React from 'react';
const LABEL_44642 = 'component_44642';
export function Component44642({ value = 44642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44642, 'data-value': derived.doubled }, children);
}
export default Component44642;
