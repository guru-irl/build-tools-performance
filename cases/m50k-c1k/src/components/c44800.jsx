import React from 'react';
const LABEL_44800 = 'component_44800';
export function Component44800({ value = 44800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44800, 'data-value': derived.doubled }, children);
}
export default Component44800;
