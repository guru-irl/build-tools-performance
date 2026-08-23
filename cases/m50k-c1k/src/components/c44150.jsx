import React from 'react';
const LABEL_44150 = 'component_44150';
export function Component44150({ value = 44150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44150, 'data-value': derived.doubled }, children);
}
export default Component44150;
