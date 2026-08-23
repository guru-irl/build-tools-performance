import React from 'react';
const LABEL_44849 = 'component_44849';
export function Component44849({ value = 44849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44849, 'data-value': derived.doubled }, children);
}
export default Component44849;
