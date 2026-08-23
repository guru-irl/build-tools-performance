import React from 'react';
const LABEL_44130 = 'component_44130';
export function Component44130({ value = 44130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44130, 'data-value': derived.doubled }, children);
}
export default Component44130;
