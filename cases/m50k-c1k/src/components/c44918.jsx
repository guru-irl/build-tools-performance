import React from 'react';
const LABEL_44918 = 'component_44918';
export function Component44918({ value = 44918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44918, 'data-value': derived.doubled }, children);
}
export default Component44918;
