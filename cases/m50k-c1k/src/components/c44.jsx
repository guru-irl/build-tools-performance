import React from 'react';
const LABEL_44 = 'component_44';
export function Component44({ value = 44, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44, 'data-value': derived.doubled }, children);
}
export default Component44;
