import React from 'react';
const LABEL_44307 = 'component_44307';
export function Component44307({ value = 44307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44307, 'data-value': derived.doubled }, children);
}
export default Component44307;
