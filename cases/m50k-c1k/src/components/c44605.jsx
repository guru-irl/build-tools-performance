import React from 'react';
const LABEL_44605 = 'component_44605';
export function Component44605({ value = 44605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44605, 'data-value': derived.doubled }, children);
}
export default Component44605;
