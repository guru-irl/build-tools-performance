import React from 'react';
const LABEL_44000 = 'component_44000';
export function Component44000({ value = 44000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44000, 'data-value': derived.doubled }, children);
}
export default Component44000;
