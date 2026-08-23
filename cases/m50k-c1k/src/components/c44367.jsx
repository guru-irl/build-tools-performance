import React from 'react';
const LABEL_44367 = 'component_44367';
export function Component44367({ value = 44367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44367, 'data-value': derived.doubled }, children);
}
export default Component44367;
