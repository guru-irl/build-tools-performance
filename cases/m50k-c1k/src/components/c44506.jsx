import React from 'react';
const LABEL_44506 = 'component_44506';
export function Component44506({ value = 44506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44506, 'data-value': derived.doubled }, children);
}
export default Component44506;
